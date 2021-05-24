import fastifyPlugin from 'fastify-plugin';
import sirv from "sirv";

function staticConnector(fastify, _, done) {
  fastify.use(
    sirv("static", {
      dev: process.env.NODE_ENV === "development",
    })
  );

  done();
}

export default fastifyPlugin(staticConnector);