import prisma from "@/lib/prisma";

export async function getExtrato() {
  return prisma.transacao.findMany();
}