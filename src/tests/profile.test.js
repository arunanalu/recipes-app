import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testa tela de perfil', () => {
  beforeEach(() => {
    localStorage.setItem('user', '{ "email": "email@mail.com" }');
  });
  test('Se o email do user aparece na tela', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/perfil');
    const email = screen.getByText('email@mail.com');
    expect(email).toBeInTheDocument();
  });
  test('Se o botão de receitas feitas redireciona para a tela correta', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/perfil');
    const recipesMadeBtn = screen.getByRole('button', {
      name: 'Receitas Feitas',
    });
    expect(recipesMadeBtn).toBeInTheDocument();
    userEvent.click(recipesMadeBtn);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/receitas-feitas');
  });
  test('Se o botão de receitas favoritas redireciona para tela correta', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/perfil');
    const favoritesRecipesBtn = screen.getByRole('button', {
      name: 'Receitas Favoritas',
    });
    expect(favoritesRecipesBtn).toBeInTheDocument();
    userEvent.click(favoritesRecipesBtn);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/receitas-favoritas');
  });
  test('Se o botão de sair redireciona para a tela correta', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/perfil');
    const leaveBtn = screen.getByRole('button', {
      name: 'Sair',
    });
    expect(leaveBtn).toBeInTheDocument();
    userEvent.click(leaveBtn);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
    const email = localStorage.getItem('email');
    expect(email).toBe(null);
  });
});
