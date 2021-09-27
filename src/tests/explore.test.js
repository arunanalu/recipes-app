import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testa componente tela de explorar', () => {
  test('Se redireciona para tela de explorar comidas', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explorar');
    const exploreFoods = screen.getByRole('button', {
      name: 'Explorar Comidas',
    });
    userEvent.click(exploreFoods);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/explorar/comidas');
  });
  test('Se redireciona para tela de explorar bebidas', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explorar');
    const exploreDrinks = screen.getByRole('button', {
      name: 'Explorar Bebidas',
    });
    userEvent.click(exploreDrinks);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/explorar/bebidas');
  });
});
