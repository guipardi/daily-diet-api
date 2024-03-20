import { describe, beforeAll, afterAll, beforeEach, it } from 'vitest'
import { app } from '../src/app'
import request from 'supertest'
import { execSync } from 'node:child_process'

describe('Users routes', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  beforeEach(() => {
    /* Reset database */
    execSync('npm run knex migrate:rollback --all')
    execSync('npm run knex migrate:latest')
  })

  it('should be able to create a neu user', async () => {
    await request(app.server)
      .post('/users')
      .send({
        name: 'Felipe',
      })
      .expect(201)
  })
})
