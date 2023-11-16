import { executeFetch, getFetch } from "@/lib/utils";
import { Conta } from "@prisma/client";

export async function getConta(){
  return await getFetch('/api/conta');
}