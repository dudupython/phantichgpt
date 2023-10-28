CREATE TABLE `UserLimit` (
	`id` varchar(191) NOT NULL,
	`userId` varchar(191) NOT NULL,
	`count` int NOT NULL DEFAULT 0,
	`createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`updatedAt` datetime(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `UserSubscription` (
	`id` varchar(191) NOT NULL,
	`userId` varchar(191) NOT NULL,
	`stripe_customer_id` varchar(191),
	`stripe_subscription_id` varchar(191),
	`stripe_price_id` varchar(191),
	`stripe_current_period_end` datetime(3)
);
