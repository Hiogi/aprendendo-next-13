'use client';

import { getConta } from "@/services/conta.service";
import { Conta } from "@prisma/client";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import React, { useState } from "react";

export default function DashboardMenu() {
  const [contas, setContas] = React.useState<Conta>();
  const [icon, setIcon] = useState(<IconEye />);
  const [showSaldo, setShowSaldo] = useState(true);

  const loadContas = React.useCallback(() => {
    setContas(undefined);
    getConta()
      // .then(response => response.json())
      .then(conta => setContas(conta));
  },[]);

  React.useEffect(() => {
    if(contas === undefined){
      loadContas();
    }
  }, [loadContas, contas]);




  const clientData = React.useMemo(() =>{
    if (contas === undefined) return '';
    const apareceSaldo = contas.saldoConta;

    function onClick() {
      console.log(icon);
      
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
      <div className="flex bg-stone-300 w-screen pl-2 py-2 border-b-2 border-zinc-400">
        <div className="text-base font-bold pr-2">Conta:</div>
          <div>{contas.numeroConta}</div>
        <div className="px-2">R$:</div>
        <div>{showSaldo ? contas.saldoConta : "***"}</div>
        <div className="pl-2">
          <button onClick={onClick}>{icon}</button>
        </div>
      </div>
    
    );
  },[contas, icon, showSaldo]);
  

  return (
    <>
      <div className="flex">
        {clientData}
      </div>
        
    </>
  );
}
