import Fastify from 'fastify';
import * as Sentry from '@sentry/node';
import * as sapper from "@sapper/server";
import CloudProfiler from "@google-cloud/profiler";
import fs from 'fs';
import { ENV_SCHEMA, SERVER_CONFIG } from './config';
const {
  LOG_LEVEL = 'info',
  CHINGU_ENV = 'development'
} = process.env;


if (["staging", "production"].includes(CHINGU_ENV)) {
  CloudProfiler.start();
}

Sentry.init({
  debug: LOG_LEVEL === 'debug',
  environment: CHINGU_ENV,
  logLevel: LOG_LEVEL
});

process.on("unhandledRejection", function(err) {
  Sentry.captureException(err);
  process.exit(1);
});

const start = async () => {
  const serverConf = {
    ...SERVER_CONFIG,
    disableRequestLogging: true
  };

  if(process.env.CHINGU_ENV === 'development' && fs.existsSync('./ssl/chingu.io.key')) {
    serverConf.https = {
      key: fs.readFileSync('./ssl/chingu.io.key'),
      cert: fs.readFileSync('./ssl/chingu.io.crt'),
      ca: [ fs.readFileSync('./ssl/myCA.pem') ],
      rejectUnauthorized: false,
      requestCert: true
    };
  }

  const fastify = Fastify(serverConf);

  fastify.register(import("fastify-env"), ENV_SCHEMA);

  fastify.register(import('fastify-formbody'));
  fastify.register(import('fastify-url-data'));
  
  fastify.register(import("fastify-compress"), {
    global: false
  });

  fastify.register(import("./plugins/auth"));

  fastify.register(import('fastify-http-proxy'), {
    upstream: process.env.API_DOMAIN,
    prefix: '/graphql',
    rewritePrefix: '/graphql',
    logLevel: process.env.CHINGU_ENV !== "production" ? 'debug' : 'info',
  });

  
  fastify.register(import('./plugins/static'));

  // App engine warmup request
  fastify.get('/_ah/warmup', (request, reply) => {
    // TODO: In the future we could use this to precache stuff
    reply.code(200).send({ warming_up: true });
  });
  

  fastify.route({
    compress: {
      threshold: 0
    },
    method: 'GET',
    path: '/*',
    logLevel: process.env.CHINGU_ENV !== 'production' ? 'debug' : 'info',
    handler: async (request, reply) => {
      return new Promise((resolve, reject) => {
        function next(err) {
          if(err) {
            Sentry.captureException(err);
            reject(err);
          }
          resolve();
        }
        sapper.middleware({
          session: req => req.session
        })({...request, ...request.raw}, reply.res, next);
      })
    },
  });

  fastify.register(import("fastify-helmet"));

  fastify.listen(process.env.PORT).then((address) => {
    fastify.log.info(`server listening on ${address}`);
  }).catch((err) => {
    Sentry.captureException(err);
    fastify.log.error(err);
    process.exit(1);
  });
};

start().catch(err => {
  Sentry.captureException(err);
  console.error(err);
});
