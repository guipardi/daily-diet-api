import fastify from 'fastify'
import { mealsRoutes } from './routes/meals'
import { usersRoutes } from './routes/users'
import { log } from './middlewares/log'
import cookie from '@fastify/cookie'

export const app = fastify()

app.addHook('preHandler', log)

app.register(cookie)

app.register(usersRoutes, {
  prefix: 'users',
})

app.register(mealsRoutes, {
  prefix: 'meals',
})
