
import React from 'react';
import LoginForm from '../../components/forms/loginForm';



type LoginPageProps = {};

const LoginPage: React.FC<LoginPageProps> = (props) => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export default React.memo(LoginPage);