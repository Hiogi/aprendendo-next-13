"use client";
import React, { useState } from "react";


export default function CadastroForm() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrar, setMostrar] = useState("password");

  function pegaNome(ev: React.ChangeEvent<HTMLInputElement>) {
    setNome(ev.target.value);
  }
  function pegaSenha(ev: React.ChangeEvent<HTMLInputElement>) {
    setSenha(ev.target.value);
  }

  function enviar(ev: React.FormEvent) {
    console.log("Nome do usuario: ", nome);
    console.log("Senha criada: ", senha);

    ev.preventDefault();

    setNome("");
    setSenha("");
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
          className="border-2 border-black rounded p-10 flex flex-col"
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
