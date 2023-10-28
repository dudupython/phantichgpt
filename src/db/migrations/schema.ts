import { mysqlTable, mysqlSchema, AnyMySqlColumn, unique, varchar, int, datetime } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const userLimit = mysqlTable("UserLimit", {
	id: varchar("id", { length: 191 }).notNull(),
	userId: varchar("userId", { length: 191 }).notNull(),
	count: int("count").default(0).notNull(),
	createdAt: datetime("createdAt", { mode: 'string', fsp: 3 }).default(sql`CURRENT_TIMESTAMP(3)`).notNull(),
	updatedAt: datetime("updatedAt", { mode: 'string', fsp: 3 }).notNull(),
},
(table) => {
	return {
		userLimitUserIdKey: unique("UserLimit_userId_key").on(table.userId),
	}
});

export const userSubscription = mysqlTable("UserSubscription", {
	id: varchar("id", { length: 191 }).notNull(),
	userId: varchar("userId", { length: 191 }).notNull(),
	stripeCustomerId: varchar("stripe_customer_id", { length: 191 }),
	stripeSubscriptionId: varchar("stripe_subscription_id", { length: 191 }),
	stripePriceId: varchar("stripe_price_id", { length: 191 }),
	stripeCurrentPeriodEnd: datetime("stripe_current_period_end", { mode: 'string', fsp: 3 }),
},
(table) => {
	return {
		userSubscriptionUserIdKey: unique("UserSubscription_userId_key").on(table.userId),
		userSubscriptionStripeCustomerIdKey: unique("UserSubscription_stripe_customer_id_key").on(table.stripeCustomerId),
		userSubscriptionStripeSubscriptionIdKey: unique("UserSubscription_stripe_subscription_id_key").on(table.stripeSubscriptionId),
	}
});