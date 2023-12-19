import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { criaPoupanca } from "@/services/poupanca.service"
import { getServerSession } from "next-auth";

export default async function PoupancaMenu() {

  const session = await getServerSession(nextAuthOptions);
  const idCliente = await criaPoupanca(Number(session?.user.id));
  console.log('AQUI IDCLIENTE ==> ' + idCliente.json());
  
  

  return (
    <>
      <div className="w-full h-full">
        <div className="flex h-full justify-center items-center">
          R$ 
        </div>
      </div>
    </>
  )
}