import { executeFetch } from "@/lib/utils";

export async function criaPoupanca() {
  return await executeFetch('http://localhost:3000/api/poupanca', 'post');
}