import { executeFetch } from "@/lib/utils";

export async function getExtrato(idCliente: number) {
  return await executeFetch('http://localhost:3000/api/extrato/' + idCliente, 'get');
}