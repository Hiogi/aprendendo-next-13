'use client';

import { TransacaoTipo } from "@/types/transacao-tipo";
import { useSession } from "next-auth/react";
import React from "react";
import Button from "../ui/Input/button";
import Input from "../ui/Input/input";
import { createTransacao } from "@/services/transacao.service";
import { ContaContext } from "../contaProvider";

type depositoProps = {};


const TransferenciaForm: React.FC<depositoProps> = (props) => {
  const { data: session } = useSession();

  const { conta, loadContas } = React.useContext(ContaContext);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget);
    const { valor, opcoes  } = Object.fromEntries(
      formData.entries()
    );
    let numberValor = Number(valor);

    if (session === null ||session === undefined || isNaN(numberValor) || typeof opcoes !== "string") {
      return;
    }

    await createTransacao({
      contaId: session.user.id,
      valor: numberValor,
      tipoTransacao: opcoes as TransacaoTipo,
    });

    loadContas();
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center w-full ">
      <form onSubmit={onSubmit}>
        <div className="mb-2">
          <Input placeholder="Digite o valor" className="p-2" name="valor" required/>
        </div>
        <div className="ml-2 font-bold">
          <select name="opcoes" id="" className="rounded py-1 bg-slate-600 ml-[117px]">
            <option value="DEPOSITO">Depósito</option>
            <option value="SAQUE">Saque</option>
            <option value="TRANSFERENCIA">Transferência</option>
            <option value="PIX">Pix</option>
          </select>
        </div>

        <div className="flex justify-center w-96 ">
          <Button placeholder="Confirmar" className="bg-green-700 px-2" />
        </div>
      </form>
    </div>
    </>
  )
}



export default React.memo(TransferenciaForm);
