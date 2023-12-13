import { executeFetch } from "@/lib/utils";

export async function criaPoupanca() {

  return await executeFetch('/api/poupanca', 'post');
}