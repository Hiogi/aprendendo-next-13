import { Prisma } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { NextResponse } from "next/server";


export module DbHelper {
  export function handleError(e: unknown) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {

      if (e.code === 'P2002') {

        return NextResponse.json({ error: 'Dados já existentes' }, { status: StatusCodes.CONFLICT });
      }

      if (e.code === 'P2025') {
        
        return NextResponse.json({ error: 'Dados não existentes' }, { status: StatusCodes.NOT_FOUND});
      }
    }
    
    throw e;
  }
}