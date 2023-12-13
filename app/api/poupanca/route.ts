import prisma from "@/lib/prisma";

export async function POST (request: Request) {

  const json = await request.json()

  try {
    
    const usuario = await prisma.conta.create({
      data: {
        clienteId: 1,
      }
    })

  } catch (error) {
    
  }
  
}