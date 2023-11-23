import { executeFetch } from "@/lib/utils";
import { TransacaoTipo } from "@/types/transacao-tipo";
import { Prisma } from "@prisma/client";

export type CreateTransacao = Omit<Prisma.TransacaoUncheckedCreateInput, 'id' | 'updatedAt' | 'createdAt'> & {
  tipoTransacao: TransacaoTipo;
}

export async function createTransacao(data: CreateTransacao) {
  return executeFetch('/api/transacao','post', data);
}

// updateConta({
//   tipoTransacao: 'SAQUE',
//   valor: 10,
//   contaId: 1,
  
// })