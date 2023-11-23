'use client';
import { formatFirstName } from "@/lib/utilities";
import { IconBusinessplan, IconHome2, IconPigMoney } from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import LogoutHome from "../logout-page";
import ItemMenu from "./itemMenu";

export default function SideBar(){

  const { data: session } = useSession();
  

  return (
    <>
    <ul className="bg-blue-950 h-screen w-48 flex flex-col items-center text-white">
        <ItemMenu href="http://localhost:3000" nomeLink={`Área do ${formatFirstName(session?.user.name?? 'Home')}`} icone={<IconHome2/>}/>
        <ItemMenu href="http://localhost:3000/poupanca" nomeLink="Poupança" icone={<IconPigMoney color="pink" />} />          
        <ItemMenu href="http://localhost:3000/deposito" nomeLink="Ações" icone={<IconBusinessplan color="gold" />} />          
        <LogoutHome />

    </ul>
    </>
  );
};