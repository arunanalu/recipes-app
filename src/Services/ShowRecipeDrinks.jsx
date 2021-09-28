import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { FcShare } from 'react-icons/fc';
import { useHistory } from 'react-router';
import CardCarrossel from '../components/CardCarrossel';
import { favoriteRecipeDrink, getFavoriteRecipeFood } from './favoriteRecipe';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function ShowRecipeDrinks({ revenue, favorite, setFavorite, pathID,
  foods, recipeLocalStorage, recipesInProgress, setRecipeInProgress }) {
  const arr = [...revenue];

  const history = useHistory();

  function startRecipe() {
    const verifyRecipe = recipesInProgress.some((idRecipe) => idRecipe === pathID);
    if (verifyRecipe) return;
    setRecipeInProgress([...recipesInProgress, pathID]);
    const recipesLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const recipeInProgress = {
      ...recipesLocalStorage,
      cocktails: {
        ...recipesLocalStorage.cocktails,
        [pathID]: [],
      },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(recipeInProgress));
    history.push(`${pathID}/in-progress`);
  }

  function copyToClipboard() {
    const notify = () => toast('Link copiado!');
    const { location: { pathname } } = history;
    const linkShare = `http://localhost:3000${pathname}`;
    navigator.clipboard.writeText(linkShare);
    notify();
  }

  useEffect(() => {
    if (localStorage.getItem('favoriteRecipes') === null) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
  }, []);

  return (
    revenue.map((recipe) => (
      <div className="recipe" key={ recipe.idDrink }>
        <img
          src={ recipe.strDrinkThumb }
          alt="revenue-img"
          data-testid="recipe-photo"
          width={ 100 }
        />
        <h4 data-testid="recipe-title">{recipe.strDrink}</h4>
        <p data-testid="recipe-category">{ recipe.strAlcoholic }</p>
        {arr[0] !== undefined
      && Object.entries(arr[0])
        .filter((value) => value[0].includes('strIngredient'))
        .filter((ingredient) => ingredient[1] !== '' && ingredient[1] !== null)
        .map((response, index) => (
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
            key={ response[1] }
          >
            { response[1] }
          </p>
        ))}
        {arr[0] !== undefined
        && Object.entries(arr[0])
          .filter((value) => value[0].includes('strMeasure'))
          .filter((ingredient) => ingredient[1] !== '' && ingredient[1] !== null)
          .map((response, index) => (
            <p
              data-testid={ `${index}-ingredient-name-and-measure` }
              key={ response[1] }
            >
              { response[1] }
            </p>
          ))}
        <p data-testid="instructions">{ recipe.strInstructions }</p>
        <button type="button" onClick={ copyToClipboard }>
          <FcShare fontSize={ 40 } data-testid="share-btn" />
          <ToastContainer />
        </button>
        <button
          type="button"
          onClick={ () => {
            setFavorite(!favorite);
            favoriteRecipeDrink(revenue, pathID);
          } }
        >
          { getFavoriteRecipeFood(pathID)
            ? <img src={ blackHeartIcon } alt="favorite" data-testid="favorite-btn" />
            : <img src={ whiteHeartIcon } alt="favorite" data-testid="favorite-btn" /> }
        </button>
        <CardCarrossel array={ foods } type="food" />
        <button
          type="button"
          data-testid="start-recipe-btn"
          className="button-start-recipe"
          onClick={ startRecipe }
        >
          { recipeLocalStorage ? 'Continuar Receita' : 'Iniciar Receita' }
        </button>
      </div>))
  );
}

export default ShowRecipeDrinks;
