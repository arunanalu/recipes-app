import React from 'react';
import shareIcon from '../images/shareIcon.svg';

export default function RecipesTadaTest() {
  return (
    <div>
      <button
        data-testid="filter-by-all-btn"
        type="button"
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        type="button"
      >
        Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
      >
        Drinks
      </button>
      <img
        alt=""
        data-testid={ `${index}-horizontal-image` }
        src={ src }
      />
      <p data-testid={ `${index}-horizontal-top-text` }>{ category }</p>
      <p data-testid={ `${index}-horizontal-name` }>{ nome }</p>
      <p data-testid={ `${index}-horizontal-done-date` }>{ date }</p>
      <input
        alt="Ícone de compartilhamento"
        data-testid={ `${index}-horizontal-share-btn` }
        type="image"
        src={ shareIcon }
      />
      <p data-testid={ `${index}-${tagName}-horizontal-tag` }>{ tags }</p>

    </div>
  );
}
