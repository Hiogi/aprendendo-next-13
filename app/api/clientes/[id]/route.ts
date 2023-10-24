import prisma from "@/lib/prisma";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  // const json = await request.json();
  const cliente = await prisma.cliente.findUnique({
    where: {
      cpf: params.id
    },
    include: {
      contas: true,
    }
  });

  return Response.json(cliente);

}
