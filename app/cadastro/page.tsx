import React from 'react';
import CadastroForm from "./components/cadastroForm";


type LoginPageProps = {};

const LoginPage: React.FC<LoginPageProps> = (props) => {
  return (
    <>
      <CadastroForm />
    </>
  );
};

export default React.memo(LoginPage);
