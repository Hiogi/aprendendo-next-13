import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const json = await request.json();

  const cliente = await prisma.cliente.findUnique({
    where: { cpf: json.cpf }
  });

  if(cliente){
    const user = await prisma.user.findUnique({
      where: { id: cliente.id }
    });

    if(user?.senha === json.senha){
      return NextResponse.json(cliente);
    }
    return NextResponse.json({ error: 'Acesso negado' }, { status: 401 });

  }else{
    return NextResponse.json({ error: 'Acesso negado' }, { status: 401 });
  }
}