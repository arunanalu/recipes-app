import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';

export default function IngredientsCard({ index, name }) {
  const history = useHistory();
  const { location: { pathname } } = history;
  const webSiteCheck = pathname.includes('bebidas') ? 'thecocktaildb' : 'themealdb';
  const src = `https://www.${webSiteCheck}.com/images/ingredients/${name}-Small.png`;

  return (
    <button
      onClick={ () => history.push('/comidas') }
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
