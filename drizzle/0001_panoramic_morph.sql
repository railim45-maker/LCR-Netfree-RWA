CREATE TABLE `interestLeads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`fullName` varchar(160) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(80),
	`profileType` enum('investor','partner','network','general') NOT NULL DEFAULT 'general',
	`message` text,
	`consentAccepted` boolean NOT NULL DEFAULT false,
	`source` varchar(120) NOT NULL DEFAULT 'landing',
	`status` enum('new','contacted','qualified','closed') NOT NULL DEFAULT 'new',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `interestLeads_id` PRIMARY KEY(`id`)
);
