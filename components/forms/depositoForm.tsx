'use client';

import { updateConta } from "@/services/deposito.service";
import React from "react";
import Button from "../ui/Input/button";
import Input from "../ui/Input/input";

type depositoProps = {};

const DepositoForm: React.FC<depositoProps> = (props) => {
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
      <form onSubmit={onSubmit}>

        <Input
          labelClassname="font-bold text-lg text-white"
          label="Valor do depósito:"
          name="valor"
          placeholder="Valor do depósito"
          className="p-2"
        />

        <Button 
        className="bg-green-800 w-96 items-center justify-center"
        placeholder="Depositar"
        />

      </form>
    </div>
    </>
  )
}



export default React.memo(DepositoForm);
