import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';

export default function ExploreDrinks() {
  const history = useHistory();
  return (
    <>
      <button
        onClick={ () => history.push('/explorar/bebidas/ingredientes') }
        data-testid="explore-by-ingredient"
        type="button"
      >
        Por Ingredientes
      </button>
      <button
        onClick={ () => history.push('') }
        data-testid="explore-surprise"
        type="button"
      >
        Me Surpreenda!
      </button>
      <Footer />
    </>
  );
}
