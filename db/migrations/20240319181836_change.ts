import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  const hasColumn = await knex.schema.hasColumn('meals', 'date_and_time')
  if (!hasColumn) {
    await knex.schema.alterTable('meals', (table) => {
      table.datetime('date_and_time').notNullable()
    })
  }
}

export async function down(knex: Knex): Promise<void> {
  const hasColumn = await knex.schema.hasColumn('meals', 'date_and_time')
  if (hasColumn) {
    await knex.schema.alterTable('meals', (table) => {
      table.dropColumn('date_and_time')
    })
  }
}
