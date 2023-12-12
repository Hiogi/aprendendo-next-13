'use client';

import { getConta } from "@/services/conta.service";
import { Conta } from "@prisma/client";
import React from "react";
import { useSession } from "next-auth/react";

type ContaProviderProps = {
  children: React.ReactNode;
}

export type ContaContextControls = {
  conta: Conta | undefined;
  loadContas: (numeroConta: number) => void;
};

export const ContaContext = React.createContext<ContaContextControls>({
  conta: undefined,
  loadContas: (numeroConta: number) => {},
});

export function ContaProvider({children}: ContaProviderProps) {

  const [conta, setConta] = React.useState<Conta>();

  const loadContas = React.useCallback((numeroConta: number) => {
    getConta(numeroConta)
      .then(response => response.json())
      .then(conta => setConta(conta));
  },[]);

  /*React.useEffect(() => {
    if(conta === undefined){
      loadContas();
    }
  }, [loadContas, conta]);*/

  const controls = {
    conta,
    loadContas,
  };

  return (
    <ContaContext.Provider value={controls}>
      {children}
    </ContaContext.Provider>
  )
} 