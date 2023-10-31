import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { migrate } from "drizzle-orm/postgres-js/migrator";

neonConfig.fetchConnectionCache = true;
 
const sql = neon(process.env.DRIZZLE_DATABASE_URL!);
export const db = drizzle(sql);
 
// const result = await db.select().from(...);

// export async function hello() {
//     const [dbResponse] = await sql`SELECT NOW();`
//     return dbResponse
// }

// const main = async () => {
// try {
//     await migrate(db, {migrationsFolder: 'src/db/migrations'});
//     console.log('migration complete')
// } catch (error) {
//     console.log(error)
// }

// };
// main();
