import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import '../css/login.css';

export default function Login() {
  const history = useHistory();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [btnDisabled, setBtnDisabled] = useState(true);

  function emailAndPasswordValidation() {
    const re = /.+@.+\.[A-Za-z]+$/;
    const minLength = 5;
    if (user.password.length > minLength && re.test(user.email)) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }

  function handleClick() {
    const { email } = user;
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/comidas');
  }

  function handleChange({ target: { name, value } }) {
    setUser({
      ...user,
      [name]: value,
    });
    emailAndPasswordValidation();
  }

  return (
    <form className="login">
      <label htmlFor="email-input">
        Email
        <input
          onChange={ handleChange }
          type="email"
          placeholder="Email"
          name="email"
          data-testid="email-input"
        />
      </label>
      <label htmlFor="password-input">
        Senha
        <input
          type="password"
          placeholder="Senha"
          name="password"
          onChange={ handleChange }
          data-testid="password-input"
        />
      </label>
      <button
        onClick={ handleClick }
        disabled={ btnDisabled }
        type="button"
        data-testid="login-submit-btn"
        className="btn btn-primary"
      >
        {' '}
        Entrar
      </button>
    </form>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;
