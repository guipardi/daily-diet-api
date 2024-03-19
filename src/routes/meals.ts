import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { checkUserIdExists } from '../middlewares/check-user-id-exists'
import { z } from 'zod'
import { randomUUID } from 'crypto'

export async function mealsRoutes(app: FastifyInstance) {
  app.post('/', { preHandler: [checkUserIdExists] }, async (request, reply) => {
    const createMealBodySchema = z.object({
      name: z.string(),
      description: z.string(),
      dateAndTime: z.coerce.date(),
      isInDiet: z.boolean(),
    })

    const { name, description, dateAndTime, isInDiet } =
      createMealBodySchema.parse(request.body)

    const userId = request.cookies.userId

    await knex('meals').insert({
      id: randomUUID(),
      name,
      description,
      date_and_time: dateAndTime.getTime(),
      is_in_diet: isInDiet,
    })
  })
}
