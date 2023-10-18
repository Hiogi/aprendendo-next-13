"use client";
import React, { useState, useEffect } from "react";
import PaginaCentral from "./components/paginaCentral";

export default function PaginaPrincipal() {
  const [menu, setMenu] = useState(PaginaCentral());
  const [saldo, setSaldo] = useState(0);
  const [deposito, setDeposito] = useState('');

  function pegaDeposito(ev: React.ChangeEvent<HTMLInputElement>) {
    setDeposito(ev.target.value);
  }

  function depositoNaConta() {
    console.log('Novo valor do depósito:', deposito);
    
    setMenu(

      <form className="text-white">
        <div className="h-screen w-[1135px] flex flex-col justify-center items-center">
          <div className="mb-4 text-3xl">Depósito</div>
          <div className="text-2xl">R${saldo} </div>
          <input onChange={pegaDeposito} value={deposito} placeholder="Digite a quantidade que irá depositar" className="text-black"></input>
          <button onClick={depositoNaConta} className="mt-3 ml-2 hover:text-gray-500"> Confirmar Depósito </button>
        </div>
      </form>

    );
  }

  function saque() {
    console.log("saque");
  }

  function transferir() {
    console.log("transferir");
  }

  return (
    <div className="h-screen bg-pgPrincipal flex">
      <div className="w-1/4 flex flex-col bg-menu">
        <div className="m-2">
          <div className="flex flex-col text-texto">
            <div className="flex items-center truncate overflow-hidden max-w-xl">
              <img src="icon-pers.png" className="h-9" alt="" />
              Eduardo Kallil Barbosa Tork
            </div>
            <div className="flex flex-col items-start">
              <button onClick={depositoNaConta} className="mt-5 ml-2 hover:text-gray-500"> Depósito </button>
              <button onClick={saque} className="mt-3 ml-2 hover:text-gray-500"> Saque </button>
              <button onClick={transferir} className="mt-3 ml-2 hover:text-gray-500"> Transferir </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen flex">
        {menu}
      </div>
      <div className="w-60 flex justify-end text-sm text-white mr-2 mt-2">
        <a href="http://localhost:3000/">Logout</a>
      </div>
    </div>
  );
}
