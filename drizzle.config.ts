import type {Config} from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default {
    schema: "./src/db/schema-planet.ts",
    out: "./src/db/migrations",
    driver: 'mysql2',
    "breakpoints": true,
    dbCredentials: {
      connectionString: process.env.DATABASE_URL as string,
    }
} satisfies Config;