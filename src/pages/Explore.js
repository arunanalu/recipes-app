import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../css/explore.css';

export default function Explore() {
  const history = useHistory();
  return (
    <>
      <Header />
      <div className="explore-container">
        <button
          onClick={ () => history.push('/explorar/comidas') }
          data-testid="explore-food"
          type="button"
          className="explore-comidas"
        >
          Explorar Comidas
        </button>
        <div className="explore-separator" />
        <button
          onClick={ () => history.push('/explorar/bebidas') }
          data-testid="explore-drinks"
          type="button"
          className="explore-bebidas"
        >
          Explorar Bebidas
        </button>
      </div>
      <Footer />
    </>
  );
}
