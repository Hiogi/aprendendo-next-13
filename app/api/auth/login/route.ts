import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const json = await request.json();

  const user = await prisma.user.findUnique({
    where: { cpf: json.cpf },
  });

  if (user?.senha === json.senha) {
    return NextResponse.json(user);
  }
  return NextResponse.json({ error: "Acesso negado" }, { status: 401 });
}
