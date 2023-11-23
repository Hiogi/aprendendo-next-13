import { DbHelper } from "@/lib/db-helper";
import prisma from "@/lib/prisma";
import { Transacao } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const json = await request.json() as Transacao

  // 'DEPOSITO' | 'SAQUE' | 'PIX' | 'TRANSFERENCIA';
  
  if (json.tipoTransacao === 'SAQUE' || json.tipoTransacao === 'PIX' || json.tipoTransacao === 'TRANSFERENCIA') {
  
  }

  // increment  - decrement
  try{

    const transacao = await prisma.$transaction(async (tx) => {
      const criarTransacao = await tx.transacao.create({
        data: {
          tipoTransacao: json.tipoTransacao,
          contaId: json.contaId,
          valor: json.valor,
        },
      });

      if (json.tipoTransacao === 'SAQUE' || json.tipoTransacao === 'PIX' || json.tipoTransacao === 'TRANSFERENCIA') {
        await tx.conta.update({
          where: { id: json.contaId  },
          data: {
            saldoConta: {
              decrement: json.valor,  
            }
          }
        });
      } else {
        await tx.conta.update({
          where: {id: json.contaId},
          data: {
            saldoConta: {
              increment: json.valor
            }
          }
        })
      }

    
      return criarTransacao;
    });


    
    return Response.json(transacao)
  }catch (e){
    return DbHelper.handleError(e);
  }
};


