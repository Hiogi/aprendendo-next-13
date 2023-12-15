import prisma from "@/lib/prisma";
import { getConta } from "@/services/conta.service";

export async function POST (request: Request, { params }: { params: { id: string } }) {

  const conta = await getConta(Number(params.id));
  console.log(conta);

  try {
    
    const usuario = await prisma.conta.create({
      data: {
        clienteId: Number(params.id),
        saldoConta: 0,
        numeroConta:'64530 - 013',
        tipoContaId: 2,
        



      }
    })

  } catch (error) {
    
  }
  
}