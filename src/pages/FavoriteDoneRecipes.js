import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FavoriteCard from '../components/FavoriteDoneCard';
import Header from '../components/Header';

export default function FavoriteDoneRecipes({ location: { pathname } }) {
  const [recipes, setRecipes] = useState();
  const [LocalRecipes, setLocalRecipes] = useState();

  useEffect(() => {
    const localStorageRecipes = pathname === '/receitas-favoritas'
      ? JSON.parse(localStorage.getItem('favoriteRecipes'))
      : JSON.parse(localStorage.getItem('doneRecipes'));
    setLocalRecipes(localStorageRecipes);
    setRecipes(localStorageRecipes);
  }, [pathname]);

  function handleClick(name) {
    if (name) {
      const foods = LocalRecipes.filter((comida) => comida.type === name);
      setRecipes(foods);
    } else { setRecipes(LocalRecipes); }
  }

  return (
    <div>
      <Header />
      <button
        data-testid="filter-by-all-btn"
        type="button"
        name=""
        onClick={ ({ target: { name } }) => handleClick(name) }
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        type="button"
        name="comida"
        onClick={ ({ target: { name } }) => handleClick(name) }
      >
        Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
        name="bebida"
        onClick={ ({ target: { name } }) => handleClick(name) }
      >
        Drinks
      </button>
      {recipes && recipes
        .map((recipe, index) => (
          <FavoriteCard
            key={ index }
            index={ index }
            recipe={ recipe }
          />
        ))}
    </div>
  );
}

FavoriteDoneRecipes.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};
