import React from 'react';
import CadastroForm from './components/CadastroForm';


type LoginPageProps = {};

const LoginPage: React.FC<LoginPageProps> = (props) => {
  return (
    <>
      <CadastroForm />
    </>
  );
};

export default React.memo(LoginPage);
