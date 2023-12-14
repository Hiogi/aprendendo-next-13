import prisma from "@/lib/prisma";

export async function POST (request: Request) {

  try {
    
    const usuario = await prisma.conta.create({
      data: {
        saldoConta: 0,
        
      }
    })

  } catch () {
    
  }
  
}