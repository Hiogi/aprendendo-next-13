'use client';

import { IconEye, IconEyeOff } from "@tabler/icons-react";
import React, { useState } from "react";
import { ContaContext } from "../contaProvider";
import { useSession } from "next-auth/react";

export default function TopBarMenu() {
  const [icon, setIcon] = useState(<IconEye />);
  const [showSaldo, setShowSaldo] = useState(true);

  const { data: session } = useSession();
  const  conta  = React.useContext(ContaContext);
  

  React.useEffect(() => {
    if(conta.conta === undefined && session?.user.id){
      conta.loadContas(session.user.id); 
    }
  }, [conta, session?.user.id]);
  


  const clientData = React.useMemo(() =>{
    if (conta === undefined) return '';

    function onClick() {
      
      if (React.isValidElement(icon) && React.isValidElement(<IconEye />)) {
        if (icon.type === IconEye) {
          setIcon(<IconEyeOff />);
          setShowSaldo(false)
        } else {
          setIcon(<IconEye />);
          setShowSaldo(true)
        }
      }
    }

    return (
      <div className="flex bg-stone-300 w-full pl-2 py-2 border-b-2 border-zinc-400">
        <div className="text-base font-bold pr-2">Conta:</div>
          <div>{conta.conta?.numeroConta}</div>
        <div className="px-2">R$:</div>
        <div>{showSaldo ? conta.conta?.saldoConta : "***"}</div>
        <div className="pl-2">
          <button onClick={onClick}>{icon}</button>
        </div>
      </div>
    
    );
  },[conta, icon, showSaldo]);
  

  return (
    <>
      <div className="flex">
        {clientData}
      </div>
        
    </>
  );
}
