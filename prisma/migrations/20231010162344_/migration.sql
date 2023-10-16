/*
  Warnings:

  - A unique constraint covering the columns `[CPF]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `User_CPF_key` ON `User`(`CPF`);
