
CREATE DATABASE IF NOT EXISTS `phone_repair_shop`;
USE `phone_repair_shop`;

CREATE TABLE IF NOT EXISTS `users` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`email` VARCHAR(25) NOT NULL,
	`password` VARCHAR(20) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `clients` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`firstName` VARCHAR(10) NOT NULL,
	`lastName` VARCHAR(10) NOT NULL,
	`phoneNumber` VARCHAR(15) NOT NULL,
	`email` VARCHAR(30) NOT NULL,
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
    `date` DATE NULL DEFAULT NULL,
	`phone_id` INT NULL DEFAULT NULL,
	PRIMARY KEY (`id`),
	INDEX `phone_id` (`phone_id`),
	CONSTRAINT `FK__phones` FOREIGN KEY (`phone_id`) REFERENCES `phones` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION
) COLLATE='utf8mb4_general_ci';

INSERT INTO `users` (`username`, `password`) 
    VALUES 
        ('Admin', '123456789'),
        ('Admin2', '123456');

INSERT INTO `clients` (`firstName`, `lastName`, `phoneNumber`, `email`) 
    VALUES 
        ('Jose', 'Martinez', '4785689236', 'josemartinez@gmail.com'),
        ('Maria', 'Espinoza', '8787875422', 'mespinoza@gmail.com'),
        ('Juana', 'Rojas', '12456890', 'juanar@gmail.com'),
        ('Pedro', 'Perez', '0987654321', 'pedroperez@gmail.com');

INSERT INTO `phones` (`mark`, `model`, `serialNumber`, `problem`, `client_id`) 
    VALUES 
        ('Samsung', 'Galaxy S21', '4856932578', 'Broken screen, touch keyboard not working', 1),
        ('LG', 'Phoenix 3', '5214789635', 'Defective camera, the photographs come out with a line in the middle', 2),
        ('Huawei', 'P40', '5896248517', 'It does not connect to the internet, problem with telephone line', 3),
        ('Motorola', 'E7 power', '1937862458', 'Apps crash randomly', 1),
        ('Iphone', '13 Pro Max', '9513578246', 'frame broken by fall', 4);



INSERT INTO `repairs` (`solution`, `price`, `date`, `phone_id`) 
    VALUES 
        ('Change touch screen for a new one', '120', '20201015', 1),
        ('Change camera for a new one', '100', '20200508', 2),
        ('Change telephone line chit', '60', '20210201', 3),
        ('Operating system reboot', '150', '20220820', 4),
        ('Change of frame for a new one', '80', '20220820', 5);