import prisma from "@/lib/prisma";
import { pegaContaParaAPoupanca } from "@/services/poupanca.service";
import { NextResponse } from "next/server";

export async function POST (request: Request, { params }: { params: { id: string } }) {

 const conta = await pegaContaParaAPoupanca(Number(params.id));
 const JSON = await conta.json();

 

  try {
    
    const contaPoupanca = await prisma.conta.create({
      data: {
        clienteId: Number(params.id),
        saldoConta: 0,
        numeroConta:JSON.numeroConta,
        tipoContaId: 2,

      }
      
    })

    
    
    
    return NextResponse.json(contaPoupanca);

  } catch (error) {
    
  }
  
}