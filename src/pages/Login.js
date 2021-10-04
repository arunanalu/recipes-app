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
    <form className="conteiner">
      <input
        className="form-control"
        onChange={ handleChange }
        type="email"
        placeholder="Email"
        name="email"
        data-testid="email-input"
      />

      <input
        className="form-control"
        type="password"
        placeholder="Senha"
        name="password"
        onChange={ handleChange }
        data-testid="password-input"
      />

      <button
        className="btn btn-info btn-block"
        onClick={ handleClick }
        disabled={ btnDisabled }
        type="button"
        data-testid="login-submit-btn"
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
