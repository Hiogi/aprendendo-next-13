import { DbHelper } from "@/lib/db-helper";
import prisma from "@/lib/prisma";
import { generateRandomNumber, isValidCPF } from "@/lib/utils";
import { ClienteComSenha } from "@/services/cliente.service";
import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { StatusCodes } from "http-status-codes";
import { NextResponse } from "next/server";

async function geraNumeroDeConta(tx: Omit<PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends">){
  let randomAccountNumber: number;
  let contaExistente = null;

  do {
    randomAccountNumber = generateRandomNumber();
    
    contaExistente = await tx.conta.findUnique({
      where: { numeroConta: randomAccountNumber },
    });

  } while (contaExistente);

  return randomAccountNumber;
}



export async function POST(request: Request) {

  const saldoInicial = 1000;
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

     const contaTipo = await tx.tipoConta.create({
        data: {
          descricao: 'nova conta',
        }
      })

      const numeroConta = await geraNumeroDeConta(tx);
      
      await tx.conta.create({
        data: {
          numeroConta,
          saldoConta: saldoInicial,
          clienteId: criarClient.id, 
          tipoContaId: contaTipo.id,

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
