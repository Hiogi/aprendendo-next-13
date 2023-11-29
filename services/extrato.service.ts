import { getFetch } from "@/lib/utils";

export async function getExtrato() {
  return await getFetch("/api/extrato")
}