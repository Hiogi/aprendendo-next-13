import prisma from "@/lib/prisma";
import { postFetch } from "@/lib/utils";
import { Prisma } from "@prisma/client";

type ClienteComSenha = Prisma.ClienteUncheckedCreateInput & {
  senha: string;
};

export function getUsers() {
  return prisma.user.findMany();
}