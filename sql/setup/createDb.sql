-- CREATE DATABASE mpsapp;

-- CREATE TABLE `mpsapp`.`users`(`id` INT(9) AUTO_INCREMENT, `email` VARCHAR(50), `FName` VARCHAR(20), `LName` VARCHAR(20), `companyName` VARCHAR(50), `role` VARCHAR(20), PRIMARY KEY(id));
CREATE TABLE `mpsapp`.`timeLog`(`timeId` INT(9) AUTO_INCREMENT, `id` INT(9), `Fname` VARCHAR(50), `LName` VARCHAR(20), `timestamp` TIMESTAMP, `hours` FLOAT, PRIMARY KEY(timeId));
