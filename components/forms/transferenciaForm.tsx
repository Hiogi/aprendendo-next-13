'use client';

import { updateConta } from "@/services/transferencia.service";
import React from "react";
import Button from "../ui/Input/button";
import Input from "../ui/Input/input";

type depositoProps = {};

const TransferenciaForm: React.FC<depositoProps> = (props) => {
  console.log('aqui')

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const { valor } = Object.fromEntries(
      formData.entries()
    );
    
    updateConta(Number(valor))

  };



  return (
    <>
    <div className="flex  justify-center mt-44 w-1/2">
      <form onSubmit={onSubmit} className="flex flex-col">

        <Input
          labelClassname="font-bold text-lg text-white"
          label="Valor do depósito:"
          name="valor"
          placeholder="Valor do depósito"
          className="p-2"
        />

        <label htmlFor="opcoes" className="w-28">Escolha uma </label>
        <select name="opcoes" id="opcoes">
          <option value="DEPOSITO">Depósito</option>
          <option value="SAQUE">Saque</option>
          <option value="TRANSFERENCIA">Transferencia</option>
          <option value="PIX">Pix</option>
        </select>

        <Button 
        className="bg-green-800 w-96 items-center justify-center"
        placeholder="Enviar"
        />

      </form>
    </div>
    </>
  )
}



export default React.memo(TransferenciaForm);
