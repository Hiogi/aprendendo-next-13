"use client";
import { Routes } from "@/lib/routes";
import { isValidCPF } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ClienteComSenha, salvarCliente } from "../../services/cliente.service";
import Button from "../ui/Input/button";
import Input from "../ui/Input/input";
import { showAlert } from "@/lib/form.utilities";
import { ShowPosition, ShowType } from "@/types/types";
type CadastroFormProps = {};

const CadastroForm: React.FC<CadastroFormProps> = (props) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const { senha, cpf, nome, confirmaSenha } = Object.fromEntries(
      formData.entries()
    );

    let error = "";

    if (!isValidCPF(cpf.toString())) error += "cpf inválido\n";
    if (!nome) error += "informe seu nome\n";
    if (senha != confirmaSenha)
      error += "As senhas que vc digitou não são iguais\n";

    if (error === "") {
      const data: ClienteComSenha = {
        name: nome.toString(),
        cpf: cpf.toString(),
        senha: senha.toString(),
      };

      salvarCliente(data)
        .then((response) => response.json())
        .then((json) => {
          if (json.error) {
            throw json;
          }

          if (json) {
            router.push(Routes.login);
          }
        })
        .catch((err) => {
          let errorMsg = 'Erro desconhecido.';

          if (typeof err.error === 'string') {
            errorMsg = err.error;
          }

          showAlert(errorMsg, ShowType.Error, ShowPosition.Top, 2200);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } else {
      setIsSubmitting(false);
      showAlert(error ,ShowType.Error, ShowPosition.Top, 2200 );
    }
  }

  // function apareceSenha() {
  //   if (mostrar === "password") {
  //     setMostrar("text");
  //   } else {
  //     setMostrar("password");
  //   }
  // }

  return (
    <div className="flex justify-between flex-col items-center h-screen">
      <div />
      <div className="border border-gray-600 rounded-lg p-3 bg-gray-700">
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
          <Input
            label="Nome"
            name="nome"
            placeholder="Nome Completo"
            defaultValue="Oi"
          />
          <Input
            label="CPF"
            name="cpf"
            placeholder="CPF"
            defaultValue="00601320271"
          />
          <Input
            label="Senha"
            type="password"
            name="senha"
            placeholder="Senha"
            defaultValue="a"
          />
          <Input
            label="Confirme a senha"
            type="password"
            name="confirmaSenha"
            placeholder="Senha"
            defaultValue="a"
          />

          <Button
            placeholder={isSubmitting ? "Enviando..." : "Enviar"}
            color="bg-green-700 text-white"
            disabled={isSubmitting}
          />
        </form>
      </div>
      <div>Banco</div>
    </div>
  );
};

export default React.memo(CadastroForm);
