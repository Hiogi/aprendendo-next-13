import { getFetch } from "@/lib/utils";

export async function getConta(){
  return await getFetch('/api/conta');
}