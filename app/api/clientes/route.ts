import { DbHelper } from "@/lib/db-helper";
import prisma from "@/lib/prisma";
import { isValidCPF } from "@/lib/utils";
import { ClienteComSenha } from "@/services/cliente.service";
import { StatusCodes } from "http-status-codes";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const json = (await request.json()) as ClienteComSenha;

  try {
    if (!isValidCPF(json.cpf)) {
      return NextResponse.json(
        { error: "CPF inválido" },
        { status: StatusCodes.BAD_REQUEST }
      );
    }

    const cliente = await prisma.$transaction(async (tx) => {
      const criarClient = await tx.cliente.create({
        data: {
          cpf: json.cpf,
          name: json.name,
        },
      });

      await tx.user.create({
        data: {
          cpf: json.cpf,
          senha: json.senha,
          name: json.name,
        },
      });

      return criarClient;
    });

    return Response.json(cliente);
  } catch (e) {
    return DbHelper.handleError(e);
  }
}

export async function GET() {
  return NextResponse.json(await prisma.cliente.findMany());
}
