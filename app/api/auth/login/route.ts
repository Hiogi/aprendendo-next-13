import prisma from "@/lib/prisma";
import { StatusCodes } from "http-status-codes";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

  const { cpf, senha } = await request.json();
  if (!cpf || !senha)
    return Response.json(
      { error: "Credenciais inválidas" },
      { status: StatusCodes.UNAUTHORIZED }
    );
  
  const user = await prisma.user.findUnique({
    where: { cpf },
  });

  if (user?.senha === senha) {
    return NextResponse.json(user);
  }
  return NextResponse.json({ error: "Acesso negado" }, { status: 401 });
}
