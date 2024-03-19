import { FastifyRequest } from 'fastify'

export async function logMeals(request: FastifyRequest) {
  console.log(`[${request.method}] ${request.url}`)
}
