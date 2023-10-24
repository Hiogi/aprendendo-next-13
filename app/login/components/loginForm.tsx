"use client";

import { isValidCPF } from "@/lib/utils";
import React from "react"
type LoginFormProps = {}; 

const LoginForm: React.FC<LoginFormProps> = (props) => {

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const { senha, cpf } = Object.fromEntries(formData.entries());

    let error = "";

    if(!isValidCPF(cpf.toString())) error += "CPF inválido\n";
    if(!senha) error += "Informe sua senha\n";
    if(error != ""){
      alert(error)
    }else{
      
    }
  } 

  return(
    <div className="bg-slate-800 h-screen flex justify-between flex-col items-center">
      <div />      
      <div className="border border-gray-600 rounded-lg p-3 bg-gray-700">
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col">            
            <label htmlFor="cpf" className="text-white">CPF</label>
            <input type="text" placeholder="CPF" name="cpf" className="p-1 rounded" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="cpf" className="text-white">Senha</label>
            <input type="text" placeholder="Senha" name="senha" className="p-1 rounded"/>
          </div>

          <button className="bg-green-800 rounded text-lg p-1 hover:bg-green-600 mt-3">Entrar</button>
        </form>
      </div>
      <div>Banco</div> 
        
    </div>
  );
}

export default React.memo(LoginForm);
