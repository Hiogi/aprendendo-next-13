'use client';

import { getConta } from "@/services/conta.service";
import { Conta } from "@prisma/client";
import React from "react";

type ContaProviderProps = {
  children: React.ReactNode;
}

export type ContaContextControls = {
  conta: Conta | undefined;
  loadContas: () => void;
};

export const ContaContext = React.createContext<ContaContextControls>({
  conta: undefined,
  loadContas: () => {},
});

export function ContaProvider({children}: ContaProviderProps) {
  const [conta, setConta] = React.useState<Conta>();

  const loadContas = React.useCallback(() => {
    
    getConta()
      .then(response => response.json())
      .then(conta => setConta(conta));
  },[]);

  React.useEffect(() => {
    if(conta === undefined){
      loadContas();
    }
  }, [loadContas, conta]);

  const controls = {
    conta,
    loadContas,
  };

  console.log(conta)

  return (
    <ContaContext.Provider value={controls}>
      {children}
    </ContaContext.Provider>
  )
} 