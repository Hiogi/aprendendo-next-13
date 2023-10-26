"use client";
import { Routes } from "@/lib/routes";
import { isValidCPF, postFetch } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ClienteComSenha, salvarCliente } from "../services/cliente-service";
import { DbHelper } from '@/lib/db-helper';

export default function CadastroForm() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrar, setMostrar] = useState("password");
  const [cpf, setCPF] = useState("");
  const [verificaSenha, setVerificaSenha] = useState("");

  const router = useRouter();

  function confirmaSenha (ev: React.ChangeEvent<HTMLInputElement>){
    setVerificaSenha(ev.target.value)
  }
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
    ev.preventDefault();
    
    let error = "";

    if (!isValidCPF(cpf)) error += "cpf inválido\n";
    if (!nome) error += "informe seu nome\n";
    if(senha != verificaSenha) error += "As senhas que vc digitou não são iguais\n"

    if (error === "") {
      const data: ClienteComSenha = { name: nome, cpf: cpf, senha: senha };

      salvarCliente(data).then((response) => {

        postFetch('/lib/dp-helper', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });


        if (response) {
          console.log(response);
          router.push(Routes.login)
        }
      });
    }else alert(error)
  }

  function apareceSenha() {
    if (mostrar === "password") {
      setMostrar("text");
    } else {
      setMostrar("password");
    }
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

                  />
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
                    required
                  />
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
                    required
                  />
                </td>
                <td>
                  <button type="button" onClick={apareceSenha}>
                    👁️‍🗨️
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    onChange={confirmaSenha}
                    value={verificaSenha}
                    className="rounded p-1 text-black mt-2"
                    type="password"
                    placeholder="Confirma senha"
                    required
                  />
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
