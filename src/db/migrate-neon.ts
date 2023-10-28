import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { migrate } from "drizzle-orm/postgres-js/migrator";

import * as dotenv from "dotenv";
dotenv.config();

neonConfig.fetchConnectionCache = true;
 
const sql = neon(process.env.DRIZZLE_DATABASE_URL!);
export const db = drizzle(sql);

const main = async () => {
try {
    await migrate(db, {migrationsFolder: 'src/db/migrations'});
    console.log('migration complete')
} catch (error) {
    console.log(error)
}

};
main();
