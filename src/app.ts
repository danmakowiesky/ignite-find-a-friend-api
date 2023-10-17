import fastify from 'fastify'
import { petRoutes } from './routes/pets'

export const app = fastify()

app.register(petRoutes, {
  prefix: '/pets'
})