import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  return NextResponse.json(
    await prisma.conta.findFirst({
      where: {
        clienteId: Number(params.id),
      }
    })
    );
  
};