import fastify from "fastify"
import { env } from "./env";

const app = fastify();

app.get('/', (request, reply) => {
  return reply.status(200).send({message: "hello world"});
})

app.listen({port: env.PORT , host: '0.0.0.0'}).then(() => console.log('🚀, server is running, on port 3333'));