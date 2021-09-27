import { screen } from '@testing-library/dom';
// import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import React from 'react';
// import PageBebidas from '../components/PageBebidas';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testa o Header em diferentes páginas', () => {
  test('Testa o Header na página de bebidas', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/bebidas');
    expect(screen.getByText(/bebidas/i)).toBeInTheDocument();
    const searchIcon = screen.getByTestId('search-top-btn');
    userEvent.click(searchIcon);
    const searchInput = screen.getByTestId('search-input');
    const ingredientRadio = screen.getByTestId('ingredient-search-radio');
    const nameRadio = screen.getByTestId('name-search-radio');
    const firstLetterRadio = screen.getByTestId('first-letter-search-radio');
    const searchButtonSubmit = screen.getByTestId('exec-search-btn');
    expect(searchInput).toBeInTheDocument();
    expect(ingredientRadio).toBeInTheDocument();
    expect(nameRadio).toBeInTheDocument();
    expect(firstLetterRadio).toBeInTheDocument();
    expect(searchButtonSubmit).toBeInTheDocument();
    userEvent.click(searchIcon);
    expect(searchInput).not.toBeInTheDocument();
    expect(ingredientRadio).not.toBeInTheDocument();
    expect(nameRadio).not.toBeInTheDocument();
    expect(firstLetterRadio).not.toBeInTheDocument();
    expect(searchButtonSubmit).not.toBeInTheDocument();
  });
  test('Testa o Header na página de comidas', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/comidas');
    expect(screen.getByText(/comidas/i)).toBeInTheDocument();
    const searchIcon = screen.getByTestId('search-top-btn');
    userEvent.click(searchIcon);
    const searchInput = screen.getByTestId('search-input');
    const ingredientRadio = screen.getByTestId('ingredient-search-radio');
    const nameRadio = screen.getByTestId('name-search-radio');
    const firstLetterRadio = screen.getByTestId('first-letter-search-radio');
    const searchButtonSubmit = screen.getByTestId('exec-search-btn');
    expect(searchInput).toBeInTheDocument();
    expect(ingredientRadio).toBeInTheDocument();
    expect(nameRadio).toBeInTheDocument();
    expect(firstLetterRadio).toBeInTheDocument();
    expect(searchButtonSubmit).toBeInTheDocument();
    userEvent.click(searchIcon);
    expect(searchInput).not.toBeInTheDocument();
    expect(ingredientRadio).not.toBeInTheDocument();
    expect(nameRadio).not.toBeInTheDocument();
    expect(firstLetterRadio).not.toBeInTheDocument();
    expect(searchButtonSubmit).not.toBeInTheDocument();
  });
  test('Testa o Header na página de perfil', () => {
    const { history } = renderWithRouter(<App />);
    localStorage.setItem('user', JSON.stringify({ email: 'teste@gmail.com' }));
    history.push('/perfil');
    expect(screen.getByText(/perfil/i)).toBeInTheDocument();
  });
});