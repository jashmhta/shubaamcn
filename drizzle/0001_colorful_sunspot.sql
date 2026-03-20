CREATE TABLE `bookings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`bookingNumber` varchar(20) NOT NULL,
	`userId` int NOT NULL,
	`serviceId` int NOT NULL,
	`packageId` int,
	`providerId` int,
	`addressId` int NOT NULL,
	`status` enum('pending','confirmed','assigned','in_progress','completed','cancelled','refunded') NOT NULL DEFAULT 'pending',
	`scheduledDate` timestamp NOT NULL,
	`scheduledTimeSlot` varchar(50),
	`totalAmount` decimal(10,2) NOT NULL,
	`notes` text,
	`cancellationReason` text,
	`completedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `bookings_id` PRIMARY KEY(`id`),
	CONSTRAINT `bookings_bookingNumber_unique` UNIQUE(`bookingNumber`)
);
--> statement-breakpoint
CREATE TABLE `cities` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`slug` varchar(100) NOT NULL,
	`state` varchar(100) NOT NULL,
	`isActive` boolean DEFAULT true,
	`displayOrder` int DEFAULT 0,
	CONSTRAINT `cities_id` PRIMARY KEY(`id`),
	CONSTRAINT `cities_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `provider_services` (
	`id` int AUTO_INCREMENT NOT NULL,
	`providerId` int NOT NULL,
	`categoryId` int NOT NULL,
	CONSTRAINT `provider_services_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `reviews` (
	`id` int AUTO_INCREMENT NOT NULL,
	`bookingId` int NOT NULL,
	`userId` int NOT NULL,
	`serviceId` int NOT NULL,
	`providerId` int,
	`rating` int NOT NULL,
	`title` varchar(200),
	`comment` text,
	`isVerified` boolean DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `reviews_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `service_categories` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`slug` varchar(100) NOT NULL,
	`description` text,
	`iconName` varchar(50),
	`imageUrl` text,
	`colorAccent` varchar(20),
	`displayOrder` int DEFAULT 0,
	`isActive` boolean DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `service_categories_id` PRIMARY KEY(`id`),
	CONSTRAINT `service_categories_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `service_packages` (
	`id` int AUTO_INCREMENT NOT NULL,
	`serviceId` int NOT NULL,
	`name` varchar(100) NOT NULL,
	`description` text,
	`price` decimal(10,2) NOT NULL,
	`features` json,
	`estimatedDuration` varchar(50),
	`isRecommended` boolean DEFAULT false,
	`displayOrder` int DEFAULT 0,
	`isActive` boolean DEFAULT true,
	CONSTRAINT `service_packages_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `service_providers` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(200) NOT NULL,
	`phone` varchar(20),
	`email` varchar(320),
	`avatarUrl` text,
	`bio` text,
	`experience` int DEFAULT 0,
	`avgRating` decimal(3,2) DEFAULT '0',
	`totalJobs` int DEFAULT 0,
	`totalReviews` int DEFAULT 0,
	`specializations` json,
	`isVerified` boolean DEFAULT false,
	`isActive` boolean DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `service_providers_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `services` (
	`id` int AUTO_INCREMENT NOT NULL,
	`categoryId` int NOT NULL,
	`name` varchar(200) NOT NULL,
	`slug` varchar(200) NOT NULL,
	`shortDescription` text,
	`longDescription` text,
	`imageUrl` text,
	`galleryUrls` json,
	`basePrice` decimal(10,2) NOT NULL,
	`unit` varchar(50) DEFAULT 'per service',
	`estimatedDuration` varchar(50),
	`avgRating` decimal(3,2) DEFAULT '0',
	`totalReviews` int DEFAULT 0,
	`totalBookings` int DEFAULT 0,
	`highlights` json,
	`includes` json,
	`excludes` json,
	`isPopular` boolean DEFAULT false,
	`isActive` boolean DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `services_id` PRIMARY KEY(`id`),
	CONSTRAINT `services_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `user_addresses` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`label` varchar(50) DEFAULT 'Home',
	`fullName` varchar(200),
	`phone` varchar(20),
	`addressLine1` text NOT NULL,
	`addressLine2` text,
	`city` varchar(100) NOT NULL,
	`state` varchar(100) NOT NULL,
	`pincode` varchar(10) NOT NULL,
	`landmark` text,
	`isDefault` boolean DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `user_addresses_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `users` ADD `phone` varchar(20);--> statement-breakpoint
ALTER TABLE `users` ADD `avatarUrl` text;