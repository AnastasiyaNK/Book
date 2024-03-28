import React, { useState } from 'react';
import cn from 'classnames';

import css from './Login.module.css';

const LoginForm = () => {
  const [formType, setFormType] = useState('login'); //'login' | 'register'

  return (
    <form className={css.form}>
      <label className={css.label}>
        <input
          className={css.input}
          placeholder="Name"
          type="text"
          name="userName"
        />
      </label>
      <label className={css.label}>
        <input
          className={css.input}
          placeholder="Email"
          type="email"
          name="userEmail"
        />
      </label>
      <label className={css.label}>
        <input
          className={css.input}
          placeholder="Password"
          type="password"
          name="userPassword"
        />
      </label>
      <button className={css.button} type="submit">
        Sign up
      </button>
      <div className={css.wrapperLinks}>
        <button
          type="button"
          onClick={() => setFormType('register')}
          className={cn(css.formLink, {
            [css.active]: formType === 'register',
          })}
        >
          sign up
        </button>
        <button
          type="button"
          onClick={() => setFormType('login')}
          className={cn(css.formLink, { [css.active]: formType === 'login' })}
        >
          sign in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
