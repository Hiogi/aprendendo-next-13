import prisma from "@/lib/prisma";
import { executeFetch } from "@/lib/utils";
import { Prisma } from "@prisma/client";

export type ClienteComSenha = Prisma.ClienteUncheckedCreateInput & {
  senha: string;
};

export function getClientes() {
  //
}

export async function salvarCliente(cliente: ClienteComSenha) {
  return executeFetch('/api/clientes', 'post' , cliente);
  
}