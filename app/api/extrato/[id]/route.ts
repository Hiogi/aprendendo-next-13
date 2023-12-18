import prisma from "@/lib/prisma";
import { pegaContaParaAPoupanca } from "@/services/poupanca.service";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {

  pegaContaParaAPoupanca(Number(params.id))
  
  return NextResponse.json(
    await prisma.transacao.findMany({
      where: {
        contaId: Number(params.id),
      }
    })
  );
}