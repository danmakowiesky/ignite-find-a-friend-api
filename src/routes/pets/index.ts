import {FastifyInstance} from 'fastify'

export async function petRoutes(app: FastifyInstance){
  app.get('/', (response, reply) => {
    return reply.status(200).send()
  })
}