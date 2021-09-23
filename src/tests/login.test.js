import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import Login from '../pages/Login';
import renderWithRouter from './renderWithRouter';

describe('Testa componente tela de login', () => {
  test('Se tem input de email e senha fucionais', () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByPlaceholderText('Email');
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByPlaceholderText('Senha');
    expect(passwordInput).toBeInTheDocument();
  });
  test('Se o botão começa desabilitado e muda para a pagina /comidas', () => {
    const { history } = renderWithRouter(<Login />);
    const mockEmail = 'alguem@alguem.com';
    const mockPassword = '1234567';
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Senha');
    const loginButton = screen.getByRole('button', {
      name: 'Entrar',
    });
    expect(loginButton).toBeDisabled();
    userEvent.type(emailInput, mockEmail);
    userEvent.type(passwordInput, mockPassword);
    expect(loginButton).toBeEnabled();
    userEvent.click(loginButton);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/comidas');
  });
});
