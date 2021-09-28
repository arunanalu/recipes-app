import React from 'react';
import PropTypes from 'prop-types';

export default function CardCarrossel({ array, type }) {
  return (
    <div className="carrossel">
      { array.map((recipe, pos) => (
        <div
          key={ type === 'drink' ? recipe.idDrink : recipe.idMeal }
          data-testid={ `${pos}-recomendation-card` }
        >
          <img
            src={ type === 'drink' ? recipe.strDrinkThumb : recipe.strMealThumb }
            alt="drink-thumb"
            width={ 40 }
          />
          <p
            data-testid={ `${pos}-recomendation-title` }
          >
            { type === 'drink' ? recipe.strDrink : recipe.strMeal }
          </p>
        </div>
      )) }
    </div>
  );
}

CardCarrossel.propTypes = {
  array: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string.isRequired,
};
