/*
  Warnings:

  - You are about to drop the column `clienteId` on the `Users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cpf]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cpf` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Users` DROP FOREIGN KEY `Users_clienteId_fkey`;

-- AlterTable
ALTER TABLE `Users` DROP COLUMN `clienteId`,
    ADD COLUMN `cpf` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Users_cpf_key` ON `Users`(`cpf`);
