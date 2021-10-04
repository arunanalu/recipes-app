import React, { useEffect, useState } from 'react';
import { FcShare } from 'react-icons/fc';
import { toast, ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import favoriteRecipeFood, { favoriteRecipeDrink,
  getFavoriteRecipeFood } from './favoriteRecipe';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function ShowProgress({ recipe, ingredients, pathID, type }) {
  const [favorite, setFavorite] = useState(false);
  const history = useHistory();
  const [ingre, setIngre] = useState([]);
  console.log(ingredients);

  useEffect(() => {
    const checkedIngre = JSON.parse(localStorage.getItem('ingredientsCheck'));
    if (checkedIngre[pathID]) {
      setIngre([...checkedIngre[pathID]]);
    }
    if (localStorage.getItem('favoriteRecipes') === null) {
      localStorage.setItem('favoriteRecipes', '[]');
    }
  }, [pathID]);

  function copyToClipboard() {
    const notify = () => toast('Link copiado!');
    const linkShare = `http://localhost:3000/${type}/${pathID}`;
    navigator.clipboard.writeText(linkShare);
    notify();
  }

  function checkStep({ target }) {
    const { value } = target;
    const findIngredient = ingre.find((search) => value === search);
    if (findIngredient) {
      const result = ingre.filter((ingredient) => ingredient !== value);
      setIngre(result);
      return;
    }
    setIngre([...ingre, value]);
    const test = [...ingre, value];
    const checkedIngre = JSON.parse(localStorage.getItem('ingredientsCheck'));
    localStorage.setItem('ingredientsCheck',
      JSON.stringify({ ...checkedIngre, [pathID]: test }));
  }

  return (
    <>
      <img
        src={ recipe.strDrinkThumb ? recipe.strDrinkThumb : recipe.strMealThumb }
        width={ 100 }
        alt="recipe"
        data-testid="recipe-photo"
      />
      <h4
        data-testid="recipe-title"
      >
        { recipe.strDrink ? recipe.strDrink : recipe.strMeal}
      </h4>
      <p
        data-testid="recipe-category"
      >
        { recipe.strAlcoholic ? recipe.strAlcoholic : recipe.strCategory }
      </p>
      { ingredients.map((ingredient, index) => (
        <ul key={ ingredient }>
          <li data-testid={ `${index}-ingredient-step` }>
            <label htmlFor={ ingredient[index] }>
              <input
                type="checkbox"
                name="ingredients"
                id={ ingredient[index] }
                value={ ingredient }
                onChange={ checkStep }
                defaultChecked={ ingre.find((value) => value === ingredient) }
              />
              { ingredient }
            </label>
          </li>
        </ul>
      )) }
      <p data-testid="instructions">{ recipe.strInstructions }</p>
      <button type="button" onClick={ copyToClipboard }>
        <FcShare fontSize={ 40 } data-testid="share-btn" />
        <ToastContainer />
      </button>
      <button
        type="button"
        onClick={ () => {
          setFavorite(!favorite);
          return type === 'bebidas' ? favoriteRecipeDrink([recipe], pathID)
            : favoriteRecipeFood([recipe], pathID);
        } }
      >
        { getFavoriteRecipeFood(pathID)
          ? <img src={ blackHeartIcon } alt="favorite" data-testid="favorite-btn" />
          : <img src={ whiteHeartIcon } alt="favorite" data-testid="favorite-btn" /> }
      </button>
      <button
        type="button"
        data-testid="finish-recipe-btn"
        disabled={ ingre.length !== ingredients.length }
        onClick={ () => history.push('/receitas-feitas') }
      >
        Finalizar Receita
      </button>
    </>
  );
}

ShowProgress.propTypes = {
  recipe: PropTypes.arrayOf(PropTypes.string).isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  pathID: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
