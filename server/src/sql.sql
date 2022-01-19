
CREATE DATABASE IF NOT EXISTS `phone_repair_shop`;
USE `phone_repair_shop`;

CREATE TABLE IF NOT EXISTS `users` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`username` VARCHAR(20) NOT NULL,
	`password` VARCHAR(20) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `clients` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`firstName` VARCHAR(10) NOT NULL,
	`lastName` VARCHAR(10) NOT NULL,
	`phoneNumber` VARCHAR(15) NOT NULL,
	`email` VARCHAR(20) NOT NULL,
	PRIMARY KEY (`id`)
) COLLATE='utf8mb4_general_ci';

CREATE TABLE IF NOT EXISTS `phones` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`mark` VARCHAR(10) NULL,
	`model` VARCHAR(20) NULL,
	`serialNumber` VARCHAR(15) NULL,
	`problem` VARCHAR(120) NULL,
	`client_id` INT NULL DEFAULT NULL,
	PRIMARY KEY (`id`),
	INDEX `client_id` (`client_id`),
	CONSTRAINT `FK__clients` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION
) COLLATE='utf8mb4_general_ci';

CREATE TABLE IF NOT EXISTS `repairs` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`solution` VARCHAR(120) NULL DEFAULT NULL,
	`price` FLOAT NULL DEFAULT NULL,
    `date` DATETIME NULL DEFAULT NULL,
	`phone_id` INT NULL DEFAULT NULL,
	PRIMARY KEY (`id`),
	INDEX `phone_id` (`phone_id`),
	CONSTRAINT `FK__phones` FOREIGN KEY (`phone_id`) REFERENCES `phones` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION
) COLLATE='utf8mb4_general_ci';