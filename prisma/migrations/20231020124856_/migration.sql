/*
  Warnings:

  - You are about to drop the column `idCliente` on the `Contas` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `Contas` table. All the data in the column will be lost.
  - You are about to drop the `Cliente` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `clienteId` to the `Contas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `saldoConta` to the `Contas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoContaId` to the `Contas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Contas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Contas` DROP FOREIGN KEY `Contas_idCliente_fkey`;

-- AlterTable
ALTER TABLE `Contas` DROP COLUMN `idCliente`,
    DROP COLUMN `tipo`,
    ADD COLUMN `clienteId` INTEGER NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `saldoConta` DOUBLE NOT NULL,
    ADD COLUMN `tipoContaId` INTEGER NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- DropTable
DROP TABLE `Cliente`;

-- CreateTable
CREATE TABLE `Clientes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cpf` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Clientes_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transacoes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `contaId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoConta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Contas` ADD CONSTRAINT `Contas_tipoContaId_fkey` FOREIGN KEY (`tipoContaId`) REFERENCES `TipoConta`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contas` ADD CONSTRAINT `Contas_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `Clientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transacoes` ADD CONSTRAINT `Transacoes_contaId_fkey` FOREIGN KEY (`contaId`) REFERENCES `Contas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
