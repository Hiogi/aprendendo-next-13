/*
  Warnings:

  - Added the required column `CPF` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `CPF` VARCHAR(191) NOT NULL;
