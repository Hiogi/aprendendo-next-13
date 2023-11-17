"use client";

import Button from "@/components/ui/Input/button";
import Input from "@/components/ui/Input/input";
import { signIn } from  'next-auth/react';
import { showAlert } from "@/lib/form.utilities";
import { isValidCPF } from "@/lib/utils";
import { ShowPosition, ShowType } from "@/types/types";
import { useRouter } from "next/navigation";
import React from "react";
import { formatNumberOnly } from "@/lib/utilities";
import ItemMenu from "../layout/itemMenu";
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
      showAlert(error, ShowType.Error, ShowPosition.Top, 2200)
      return;
    }

    const result = await signIn('credentials',{
      cpf: formatNumberOnly(cpf.toString()),
      senha,
      redirect: false
    });

    if  (result?.error) {
      showAlert("Acesso Negado", ShowType.Error, ShowPosition.Top,2200)
      console.log('erro -> ', result);
      return;
    }
      router.replace('/');

    }

  return (
    <div className="flex justify-between flex-col items-center h-screen">
      <div />
      <div className="border border-gray-600 rounded-lg p-3 bg-gray-700">
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
          <Input 
          labelClassname="text-white"
          label="CPF" 
          name="cpf" 
          placeholder="CPF" 
          />

          <Input 
          labelClassname="text-white"
          label="Senha" 
          name="senha" 
          placeholder="Senha" 
          />
          
          <Button 
          placeholder="Enviar" 
          color="bg-green-700 text-white" 
          />

          <ul>
            <ItemMenu href="http://localhost:3000/clientes" nomeLink={"Não tem cadastro? Cadastre-se aqui"} className=" "  />
          </ul>

        </form>
      </div>
      <div>Banco</div>
    </div>
  );
};

export default React.memo(LoginForm);
