import { screen } from '@testing-library/dom';
// import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import React from 'react';
// import PageBebidas from '../components/PageBebidas';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testa o Header em diferentes páginas', () => {
  test('Testa o Header na página de bebidas', () => {
    // const data = [{}];

    // global.fetch = jest.fn().mockResolvedValue({
    //   json: jest.fn().mockResolvedValue(data),
    // });

    const { history } = renderWithRouter(<App />);
    history.push('/bebidas');
    expect(screen.getByText(/bebidas/i)).toBeInTheDocument();
  });
  test('Testa o Header na página de comidas', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/comidas');
    expect(screen.getByText(/comidas/i)).toBeInTheDocument();
  });
  test('Testa o Header na página de perfil', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/perfil');
    expect(screen.getByText(/perfil/i)).toBeInTheDocument();
  });
});
