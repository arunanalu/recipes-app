import React, { useState } from 'react';

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  function handleChange({ target: { name, value } }) {
    setUser({
      ...user,
      [name]: value,
    });
  }

  return (
    <form>
      <input type="email" placeholder="Email" name="email" data-testid="email-input" />
      <input
        type="text"
        placeholder="Senha"
        name="password"
        onChange={ handleChange }
        data-testid="password-input"
      />
      <button type="submit" data-testid="login-submit-btn"> Login </button>
    </form>
  );
}
