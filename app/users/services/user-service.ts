import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

type ClienteComSenha = Prisma.ClienteUncheckedCreateInput & {
  senha: string;
};

export function getUsers() {
  return prisma.user.findMany();
}