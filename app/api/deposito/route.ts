import { showAlert } from "@/lib/form.utilities";
import prisma from "@/lib/prisma";
import { ShowPosition, ShowType } from "@/types/types";

export async function UPDATE() {
  try {
    const contaAtualizada = await prisma.conta.update({
      where: { id: contaId },
      data: {
        saldoConta: novoSaldo,
      },
    });

    showAlert('Depósito concluido', ShowType.Success, ShowPosition.Top, 2200)
  } catch (error) {
    console.error('Erro ao atualizar o saldo da conta:', error);
  }
}