import { showAlert } from "@/lib/form.utilities";
import prisma from "@/lib/prisma";
import { ShowPosition, ShowType } from "@/types/types";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  let json = (await request.json()) 

  try {
    const contaAtualizada = await prisma.conta.update({
      where: { id: 1 },
      data: {
        saldoConta: novoSaldo,
      },
    });
    showAlert('Depósito concluido', ShowType.Success, ShowPosition.Top, 2200)
    return Response.json(contaAtualizada)
  } catch (error) {
    console.error('Erro ao atualizar o saldo da conta:', error);
  }
}