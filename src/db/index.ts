import { drizzle } from 'drizzle-orm/planetscale-serverless'
import { connect } from '@planetscale/database'
import { sql } from 'drizzle-orm'

// import * as schema from './schema-planet'
// create database connection
const connection = connect({
  url: process.env.DATABASE_URL,
})
// const connection = connect({
//   host: process.env["DATABASE_HOST"],
//   username: process.env["DATABASE_USERNAME"],
//   password: process.env["DATABASE_PASSWORD"],
// });

export const db = drizzle(connection)

export async function hello() {
  const { rows }= await db.execute(sql`SELECT NOW();`)
  return Object.values(rows[0])
}

