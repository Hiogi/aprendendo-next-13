import { executeFetch } from "@/lib/utils";

export async function getConta(){
  return await executeFetch('/api/conta', 'get');
}