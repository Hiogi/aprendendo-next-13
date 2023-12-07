import { executeFetch } from "@/lib/utils";

export async function getConta(idCliente: number){
  
  return await executeFetch('/api/conta/'+ idCliente, 'get');
}