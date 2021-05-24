import fastifyPlugin from "fastify-plugin";
import * as Sentry from '@sentry/node';
import { DEFAULT_COOKIE_OPTIONS } from '../config';

function authConnector(fastify, _, done) {
  fastify.register(require("fastify-cookie"), {
    ...DEFAULT_COOKIE_OPTIONS
  });

  fastify.register(require("fastify-jwt"), {
    secret: fastify.config.JWT_SECRET,
  });

  fastify.addHook("preHandler", async (request, reply) => {
    if(request.cookies && request.cookies.auth_token) {
      try {
        const token = reply.unsignCookie(request.cookies.auth_token);
        if(!token) {
          throw new Error('Invalid token signature');
        }
        const decoded = await fastify.jwt.verify(token);
        request.raw.session = {
          ...decoded,
          id: decoded.jwtid,
          userId: decoded.subject,
          startedAt: decoded.iat
        };
      } catch (err) {
        Sentry.captureException(err);
        reply.clearCookie('auth_token', {
          expires: new Date(0)
        });
        reply.clearCookie('u', {
          expires: new Date(0)
        });
        reply.code(401);
        return err.message;
      }
    }
  });

  done();
}

export default fastifyPlugin(authConnector);