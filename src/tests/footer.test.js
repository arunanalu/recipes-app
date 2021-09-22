import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Footer from '../components/Footer';
import renderWithRouter from './renderWithRouter';

describe('Testa o componente footer', () => {
  test('Se existe ícones', () => {
    render(<Footer />);
    const drinkIcon = screen.getByRole('button', {
      name: 'Ícone de drinks',
    });
    const exploreIcon = screen.getByRole('button', {
      name: 'Ícone de bússola',
    });
    const mealIcon = screen.getByRole('button', {
      name: 'Ícone de comida',
    });
    expect(drinkIcon.src).toBe('drinkIcon.svg');
    expect(exploreIcon.src).toBe('exploreIcon.svg');
    expect(mealIcon.src).toBe('mealIcon.svg');
  });

  test('Se redireciona para tela de bebidas', () => {
    const { history } = renderWithRouter(<Footer />);

    const drinkIcon = screen.getByRole('button', {
      name: 'Ícone de drinks',
    });
    userEvent.click(drinkIcon);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/bebidas');
  });

  test('Se redireciona para tela de explorar', () => {
    const { history } = renderWithRouter(<Footer />);

    const exploreIcon = screen.getByRole('button', {
      name: 'Ícone de bússola',
    });
    userEvent.click(exploreIcon);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/explorar');
  });

  test('Se redireciona para tela de comidas', () => {
    const { history } = renderWithRouter(<Footer />);

    const mealIcon = screen.getByRole('button', {
      name: 'Ícone de comida',
    });
    userEvent.click(mealIcon);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/comidas');
  });
});
