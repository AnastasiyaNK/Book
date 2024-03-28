import LoginForm from 'components/LoginForm/LoginForm';
import React from 'react';
import css from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={css.containerForm}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
