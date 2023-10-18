"use client";
import { Utils } from "@/lib/utils";
import React, { useState } from "react";


export default function CadastroForm() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrar, setMostrar] = useState("password");
  const [cpf, setCPF] = useState("");
  

  function pegaNome(ev: React.ChangeEvent<HTMLInputElement>) {
    setNome(ev.target.value);
  }
  function pegaSenha(ev: React.ChangeEvent<HTMLInputElement>) {
    setSenha(ev.target.value);
  }
  function pegaCPF(ev: React.ChangeEvent<HTMLInputElement>) {
    setCPF(ev.target.value);
  }

  async function enviar(ev: React.FormEvent) {

    if(isValidCPF(cpf) === false){
      return alert("cpf inválido")
    }

    console.log("Nome do usuario: ", nome);
    console.log("Senha criada: ", senha);
    console.log("cpf registrado: ", cpf)

    if (!nome) {
      // erro
      return;
    }

    ev.preventDefault();

    setNome("");
    setSenha("");
    setCPF("");

    const response = await Utils.post('/api/users', {
      nome: nome,
      senha: senha,
      cpf: cpf,
    });

    if (response.ok) {
      alert('Usuário cadastrado com sucesso');
    }
    else {
      alert("eerwer");
    }
  }

  function apareceSenha() {
    if (mostrar === "password") {
      setMostrar("text");
    } else {
      setMostrar("password");
    }
  }

  function isValidCPF(CPF: string) {
    if (typeof CPF !== 'string') {
    return false;
  }
   
  CPF = CPF.replace(/[^\d]+/g, '');
  
  if (CPF.length !== 11 || !!CPF.match(/(\d)\1{10}/)) {
    return false;
  }

  const values = CPF.split('').map(el => +el);
  const rest = (count: any) => (values.slice(0, count-12).reduce( (soma, el, index) => (soma + el * (count-index)), 0 )*10) % 11 % 10;

  return rest(10) === values[9] && rest(11) === values[10];
}

  return (
    <div className="bg-gradient-to-r from bg-slate-800  ">
      <div className="h-screen flex items-center justify-center">
        <form
          onSubmit={enviar}
          className="border-2 border-black bg-home rounded p-10 flex flex-col"
        >
          <div className="mb-2 text-white max-w-inputWidth">Cadastro</div>
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    onChange={pegaNome}
                    value={nome}
                    className="rounded p-1 text-black mb-2"
                    type="text"
                    placeholder="Nome completo"
                    required />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    onChange={pegaCPF}
                    value={cpf}
                    className="rounded p-1 text-black mb-2"
                    type="text"
                    placeholder="CPF"
                    required />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    onChange={pegaSenha}
                    value={senha}
                    className="rounded p-1 text-black mr-2"
                    type={mostrar}
                    placeholder="Senha"
                    required />
                </td>
                <td>
                  <button type="button" onClick={apareceSenha}>
                    👁️‍🗨️
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <button className="text-white flex bg-gray-900 mt-2 border-2 py-1 px-2 border-black rounded ">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
