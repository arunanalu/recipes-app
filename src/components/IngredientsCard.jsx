import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import myContext from '../context/mycontext';
import fetchFoods, { fetchDrinks } from '../Services/fetchApiFoodsandDrinks';

export default function IngredientsCard({ index, name }) {
  const history = useHistory();
  const { location: { pathname } } = history;
  const { setMeals, setDrinks } = useContext(myContext);
  const webSiteCheck = pathname.includes('bebidas') ? 'thecocktaildb' : 'themealdb';
  const src = `https://www.${webSiteCheck}.com/images/ingredients/${name}-Small.png`;

  function handleClick() {
    return pathname.includes('bebidas')
      ? fetchDrinks('ingrediente', name)
        .then(({ drinks }) => {
          setDrinks(drinks);
          history.push('/bebidas');
        })
      : fetchFoods('ingrediente', name)
        .then(({ meals }) => {
          setMeals(meals);
          history.push('/comidas');
        });
  }

  return (
    <button
      onClick={ handleClick }
      type="button"
      data-testid={ `${index}-ingredient-card` }
    >
      <p data-testid={ `${index}-card-name` }>{name}</p>
      <img
        alt="imagem de ingrediente"
        data-testid={ `${index}-card-img` }
        src={ src }
      />
    </button>);
}

IngredientsCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
