import { getFetch } from "@/lib/utils";

export async function getExtrato() {
  return await getFetch('http://localhost:3000/api/conta');
}