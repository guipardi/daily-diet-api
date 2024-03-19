/* Definição de tipos */

// eslint-disable-next-line
import { knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    meals: {
      id: string
      name: string
      description: string
      date_and_time: string
      is_in_diet: boolean
      session_id?: string
    }
  }
}
