import { DbHelper } from "@/lib/db-helper";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const json = await request.json();

  try {
    const cliente = await prisma.$transaction(async (tx) => {
      const criarClient = await tx.cliente.create({
        data: {
          cpf: json.cpf,
          name: json.name,
        },
      });
  
      await tx.user.create({
        data: {
          clienteId: criarClient.id,
          senha: json.senha,
        },
      });
     
      return criarClient;
    });
    
    return Response.json(cliente);
  } catch (e) {
    
    return DbHelper.handleError(e);
  }
}