import prisma from "@/lib/prisma";
import { postFetch } from "@/lib/utils";
import { Prisma } from "@prisma/client";

export type ClienteComSenha = Prisma.ClienteUncheckedCreateInput & {
  senha: string;
};

export function getClientes() {
  return prisma.cliente.findMany();
}

export async function salvarCliente(cliente: ClienteComSenha) {
  const dataCliente = await 
    postFetch('/api/clientes', cliente)
    .then((response) => {
      if (!response.ok) {
        // alert('Deu erro, verifique o console por enquanto.');
        console.log(response, 'to aqui ó');
         return false;
      }

      return true;
    });

  return dataCliente;
}