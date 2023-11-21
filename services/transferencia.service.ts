import { executeFetch } from "@/lib/utils";
import { TransacaoTipo } from "@/types/transacao-tipo";
import { Prisma } from "@prisma/client";

export type CreateTransacao = Omit<Prisma.TransacaoUncheckedCreateInput, 'id' | 'updatedAt' | 'createdAt'> & {
  tipoTransacao: TransacaoTipo;
}

export async function updateConta(data: CreateTransacao) {
  return executeFetch('/api/transferencia','put', data);
}

updateConta({
  tipoTransacao: 'SAQUE',
  valor: 10,
  contaId: 1,
  
})