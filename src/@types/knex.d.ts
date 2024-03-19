/* Definição de tipos */

// eslint-disable-next-line
import { knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    meals: {
      id: string
      user_id: string
      name: string
      description: string
      is_on_diet: boolean
      date: number
    }
    users: {
      id: string
      session_id: string
      name: string
    }
  }
}
