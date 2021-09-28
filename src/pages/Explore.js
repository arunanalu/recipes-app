import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Explore() {
  const history = useHistory();
  return (
    <>
      <Header />
      <button
        onClick={ () => history.push('/explorar/comidas') }
        data-testid="explore-food"
        type="button"
      >
        Explorar Comidas
      </button>
      <button
        onClick={ () => history.push('/explorar/bebidas') }
        data-testid="explore-drinks"
        type="button"
      >
        Explorar Bebidas
      </button>
      <Footer />
    </>
  );
}
