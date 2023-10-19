/*
  Warnings:

  - You are about to drop the `Conta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Transferencia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Conta` DROP FOREIGN KEY `Conta_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Transferencia` DROP FOREIGN KEY `Transferencia_contaDestinoId_fkey`;

-- DropForeignKey
ALTER TABLE `Transferencia` DROP FOREIGN KEY `Transferencia_contaOrigemId_fkey`;

-- DropTable
DROP TABLE `Conta`;

-- DropTable
DROP TABLE `Transferencia`;

-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `Cliente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cpf` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Cliente_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idCliente` INTEGER NOT NULL,
    `numeroConta` VARCHAR(191) NOT NULL,
    `tipo` ENUM('CORRENTE', 'POUPANCA') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Contas` ADD CONSTRAINT `Contas_idCliente_fkey` FOREIGN KEY (`idCliente`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
