CREATE TABLE `chat_messages` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`sessionId` varchar(64) NOT NULL,
	`role` enum('user','assistant') NOT NULL,
	`content` text NOT NULL,
	`metadata` json,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `chat_messages_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `promo_codes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`code` varchar(50) NOT NULL,
	`description` text,
	`discountType` enum('percentage','flat') NOT NULL,
	`discountValue` decimal(10,2) NOT NULL,
	`maxDiscount` decimal(10,2),
	`minOrderAmount` decimal(10,2) DEFAULT '0',
	`usageLimit` int,
	`usedCount` int DEFAULT 0,
	`validFrom` timestamp,
	`validUntil` timestamp,
	`isActive` boolean DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `promo_codes_id` PRIMARY KEY(`id`),
	CONSTRAINT `promo_codes_code_unique` UNIQUE(`code`)
);
--> statement-breakpoint
CREATE TABLE `search_keywords` (
	`id` int AUTO_INCREMENT NOT NULL,
	`keyword` varchar(200) NOT NULL,
	`serviceId` int,
	`categoryId` int,
	`searchCount` int DEFAULT 0,
	`isActive` boolean DEFAULT true,
	CONSTRAINT `search_keywords_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `bookings` ADD `subtotal` decimal(10,2) NOT NULL;--> statement-breakpoint
ALTER TABLE `bookings` ADD `gstRate` decimal(5,2) DEFAULT '18.00';--> statement-breakpoint
ALTER TABLE `bookings` ADD `gstAmount` decimal(10,2) DEFAULT '0';--> statement-breakpoint
ALTER TABLE `bookings` ADD `platformFee` decimal(10,2) DEFAULT '0';--> statement-breakpoint
ALTER TABLE `bookings` ADD `discountAmount` decimal(10,2) DEFAULT '0';--> statement-breakpoint
ALTER TABLE `bookings` ADD `promoCodeId` int;--> statement-breakpoint
ALTER TABLE `bookings` ADD `paymentStatus` enum('pending','paid','refunded','failed') DEFAULT 'pending';--> statement-breakpoint
ALTER TABLE `bookings` ADD `paymentMethod` varchar(50);--> statement-breakpoint
ALTER TABLE `bookings` ADD `stripePaymentIntentId` varchar(255);--> statement-breakpoint
ALTER TABLE `bookings` ADD `stripeRefundId` varchar(255);--> statement-breakpoint
ALTER TABLE `bookings` ADD `paidAt` timestamp;--> statement-breakpoint
ALTER TABLE `bookings` ADD `isUrgent` boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE `bookings` ADD `cancelledAt` timestamp;--> statement-breakpoint
ALTER TABLE `services` ADD `searchKeywords` text;