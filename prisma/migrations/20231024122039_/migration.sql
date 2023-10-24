-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `Clientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
