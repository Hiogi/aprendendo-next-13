"use client";

import Button from "@/components/ui/Input/button";
import Input from "@/components/ui/Input/input";
import { isValidCPF } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";
type LoginFormProps = {};

const LoginForm: React.FC<LoginFormProps> = (props) => {
  const router = useRouter();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const { senha, cpf } = Object.fromEntries(formData.entries());

    let error = "";

    if (!isValidCPF(cpf.toString())) error += "CPF inválido\n";
    if (!senha) error += "Informe sua senha\n";
    if (error != "") {
      alert(error);
    } else {

      router.push('/clientes');
    }
  }

  return (
    // <div className="bg-slate-800 h-screen flex justify-between flex-col items-center">
    <div className="flex justify-between flex-col items-center h-screen">
      <div />
      <div className="border border-gray-600 rounded-lg p-3 bg-gray-700">
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
          <Input 
          label="CPF" 
          name="cpf" 
          placeholder="CPF" 
          />

          <Input 
          label="Senha" 
          name="senha" 
          placeholder="Senha" 
          />
          
          <Button 
          placeholder="Enviar" 
          color="bg-green-700 text-white" 
          />

        </form>
      </div>
      <div>Banco</div>
    </div>
  );
};

export default React.memo(LoginForm);
