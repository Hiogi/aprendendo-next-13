import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const json = await request.json();

  const cliente = await prisma.cliente.create({
    data: {
      cpf: json.cpf,
      name: json.nome,
    },
  });

  return Response.json(cliente);
}