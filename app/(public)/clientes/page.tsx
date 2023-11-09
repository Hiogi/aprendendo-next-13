import React from 'react';
import CadastroForm from '../../../components/forms/cadastroForm';



type LoginPageProps = {};

const LoginPage: React.FC<LoginPageProps> = (props) => {
  return (
    <>
      <CadastroForm />
    </>
  );
};

export default React.memo(LoginPage);
