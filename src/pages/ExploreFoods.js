import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExploreFood() {
  const history = useHistory();

  function handleClick() {
    return fetch('https://www.themealdb.com/api/json/v1/1/random.php').then((response) => response.json())
      .then((res) => res.meals)
      .then((res) => history.push(`/comidas/${res[0].idMeal}`));
  }

  return (
    <>
      <Header />
      <button
        onClick={ () => history.push('/explorar/comidas/ingredientes') }
        data-testid="explore-by-ingredient"
        type="button"
      >
        Por Ingredientes
      </button>
      <button
        onClick={ () => history.push('/explorar/comidas/area') }
        data-testid="explore-by-area"
        type="button"
      >
        Por Local de Origem
      </button>
      <button
        onClick={ handleClick }
        data-testid="explore-surprise"
        type="button"
      >
        Me Surpreenda!
      </button>
      <Footer />
    </>
  );
}
