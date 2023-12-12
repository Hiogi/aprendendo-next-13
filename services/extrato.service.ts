import { executeFetch } from "@/lib/utils";

export async function getExtrato(idConta: number) {
  return await executeFetch('http://localhost:3000/api/extrato/' + idConta, 'get');
}