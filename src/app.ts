import fastify from 'fastify'
import { mealsRoutes } from './routes/meals'
import { logMeals } from './middlewares/log-meals'

export const app = fastify()

app.addHook('preHandler', logMeals)

app.register(mealsRoutes, {
  prefix: 'meals',
})
