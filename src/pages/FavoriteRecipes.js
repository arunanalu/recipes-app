import React, { useEffect, useState } from 'react';
import FavoriteCard from '../components/FavoriteCard';
import Header from '../components/Header';

export default function FavoriteRecipes() {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    const localStorageRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setRecipes(localStorageRecipes);
  }, []);

  function handleClick(name) {
    const localStorageRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (name) {
      const foods = localStorageRecipes.filter((comida) => comida.type === name);
      console.log(foods);
      setRecipes(foods);
    } else { setRecipes(localStorageRecipes); }
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
