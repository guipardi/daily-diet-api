import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('users')
  await knex.schema.dropTableIfExists('meals')
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.uuid('id').primary()
    table.text('name').notNullable()
    table.specificType('refeicoes', 'text[]')
  })

  await knex.schema.createTable('meals', (table) => {
    table.uuid('id').primary()
    table.text('name').notNullable()
    table.text('description').notNullable()
    table.date('date_and_time').defaultTo(knex.fn.now()).notNullable()
    table.boolean('isInDiet').notNullable()
  })
}
