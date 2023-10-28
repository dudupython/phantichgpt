import {  eq, sql } from "drizzle-orm";
import { integer, boolean, text, pgTable,pgSchema, varchar, bigint, numeric, timestamp, date,  uuid, unique,} from "drizzle-orm/pg-core";

// export const mySchema = pgSchema("choncophieu")

export const users = pgTable("users", {
    id: text("id").primaryKey(),
    firstName: text("first_name"),
    lastName: text("last_name"),
    email: text("email").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    // updatedAt: timestamp("updated_at")
    // varchar1: v  archar('varchar2', { length: 256 }),
    // boolean: boolean('boolean')
    // bigint: bigint('bigint', { mode: 'number' })
    // timestamp3: timestamp('timestamp3').defaultNow(),



});

// will be inferred as text: "value1" | "value2" | null
// firstName: text('text', { enum: ["value1", "value2"] })