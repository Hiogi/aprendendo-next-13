import { executeFetch } from "@/lib/utils";

export async function updateConta(valor: number){
  executeFetch('/api/deposito','update', valor);
}