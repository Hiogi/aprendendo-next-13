import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const json = await request.json();

  const user = await prisma.user.create({
    data: {
      cpf: json.cpf,
      name: json.nome,
      password: json.senha,
    },
  });

  return Response.json(user);
}