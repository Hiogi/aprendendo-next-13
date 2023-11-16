'use client';
import { IconBusinessplan, IconExchange, IconHome2, IconPigMoney, IconUpload } from "@tabler/icons-react";
import ItemMenu from "./itemMenu";
import { signOut, useSession } from "next-auth/react";
import { formatFirstName } from "@/lib/utilities";
import LogoutHome from "../logout-page";

export default function SideBar(){

  const { data: session } = useSession();
  

  return (
    <>
    <ul className="bg-blue-950 h-screen w-48 flex flex-col items-center text-white">
        <ItemMenu href="http://localhost:3000" nomeLink={`Área do ${formatFirstName(session?.user.name?? 'Home')}`} icone={<IconHome2/>}/>
        <ItemMenu href="http://localhost:3000/poupanca" nomeLink="Poupança" icone={<IconPigMoney color="pink" />} />          
        <ItemMenu href="http://localhost:3000/deposito" nomeLink="Depósito" icone={<IconBusinessplan color="gold" />} />          
        <ItemMenu href="http://localhost:3000/saque" nomeLink="Saque" icone={<IconUpload />}/>  
        <ItemMenu href="http://localhost:3000/transferir" nomeLink="Transferir" icone={<IconExchange />} />  
        <LogoutHome />

    </ul>
    </>
  );
};