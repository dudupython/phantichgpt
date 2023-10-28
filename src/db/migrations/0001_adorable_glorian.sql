ALTER TABLE `UserLimit` ADD CONSTRAINT `UserLimit_userId_key` UNIQUE(`userId`);--> statement-breakpoint
ALTER TABLE `UserSubscription` ADD CONSTRAINT `UserSubscription_userId_key` UNIQUE(`userId`);--> statement-breakpoint
ALTER TABLE `UserSubscription` ADD CONSTRAINT `UserSubscription_stripe_customer_id_key` UNIQUE(`stripe_customer_id`);--> statement-breakpoint
ALTER TABLE `UserSubscription` ADD CONSTRAINT `UserSubscription_stripe_subscription_id_key` UNIQUE(`stripe_subscription_id`);