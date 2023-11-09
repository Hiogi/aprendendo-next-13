import { IconBusinessplan, IconExchange, IconPigMoney, IconUpload } from "@tabler/icons-react";
import React from "react";
import ItemSidebar from "./itemSidebar";

export default function SideBar(){
  

  return (
    <>
    <ul className="bg-blue-950 h-screen flex flex-col items-center text-white">
        <ItemSidebar href="http://localhost:3000/poupanca" nomeLink="Poupança" icone={<IconPigMoney color="pink" />} />          
        <ItemSidebar href="http://localhost:3000/deposito" nomeLink="Depósito" icone={<IconBusinessplan color="gold" />} />          
        <ItemSidebar href="http://localhost:3000/saque" nomeLink="Saque" icone={<IconUpload />}/>  
        <ItemSidebar href="http://localhost:3000/transferir" nomeLink="Transferir" icone={<IconExchange />} />  

    </ul>
    </>
  );
};