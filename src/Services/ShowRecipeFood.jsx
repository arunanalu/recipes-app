import React, { useEffect } from 'react';
import { FcShare } from 'react-icons/fc';
import { toast, ToastContainer } from 'react-toastify';
import { useHistory } from 'react-router';
import CardCarrossel from '../components/CardCarrossel';
import favoriteRecipeFood, { getFavoriteRecipeFood } from './favoriteRecipe';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function ShowRecipe({ revenue, favorite, setFavorite, pathID,
  drinks, recipeLocalStorage, recipesInProgress, setRecipeInProgress }) {
  const arr = [...revenue];

  const history = useHistory();

  const ingredientsRecipe = arr[0] !== undefined && Object.entries(arr[0])
    .filter((value) => value[0].includes('strIngredient'))
    .filter((ingredient) => ingredient[1] !== '' && ingredient[1] !== null)
    .map((value) => value[1]);

  function startRecipe() {
    const verifyRecipe = recipesInProgress.some((idRecipe) => idRecipe === pathID);
    if (verifyRecipe) {
      return history.push({
        pathname: `${pathID}/in-progress`,
        state: { recipe: revenue, ingredients: ingredientsRecipe, pathID },
      });
    }
    setRecipeInProgress([...recipesInProgress, pathID]);
    const recipesLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const recipeInProgress = {
      ...recipesLocalStorage,
      meals: {
        ...recipesLocalStorage.meals,
        [pathID]: ingredientsRecipe,
      },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(recipeInProgress));
    history.push({
      pathname: `${pathID}/in-progress`,
      state: { recipe: revenue, ingredients: ingredientsRecipe, pathID },
    });
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
      <div className="recipe" key={ recipe.idMeal }>
        <div className="details-img-container">
          <img
            src={ recipe.strMealThumb }
            alt="revenue-img"
            data-testid="recipe-photo"
            width={ 100 }
            className="details-img"
          />
        </div>
        <h4 data-testid="recipe-title">{recipe.strMeal}</h4>
        <p data-testid="recipe-category">{`Category: ${recipe.strCategory}`}</p>
        {arr[0] !== undefined
      && Object.entries(arr[0])
        .filter((value) => value[0].includes('strIngredient'))
        .filter((ingredient) => ingredient[1] !== '' && ingredient[1] !== null)
        .map((response, index) => (
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
            key={ response[1] }
          >
            {`${response[1]} - `}
            {
              arr[0] !== undefined
              && Object.entries(arr[0])
                .filter((value) => value[0].includes('strMeasure'))
                .filter((ingredient) => ingredient[1] !== '' && ingredient[1] !== null)
                .map((response2, index2) => index2 === index && (
                  (
                    <span
                      data-testid={ `${index2}-ingredient-name-and-measure` }
                      key={ response2[1] }
                    >
                      { response2[1] }
                    </span>
                  )
                ))
            }
          </p>
        ))}
        {/* {arr[0] !== undefined
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
            ))} */}
        <p data-testid="instructions">{ recipe.strInstructions }</p>
        <a href={ recipe.strYoutube } data-testid="video">
          {recipe.strYoutube}
        </a>
        <button type="button" onClick={ copyToClipboard }>
          <FcShare fontSize={ 40 } data-testid="share-btn" />
          <ToastContainer />
        </button>
        <button
          type="button"
          onClick={ () => {
            setFavorite(!favorite);
            favoriteRecipeFood(revenue, pathID);
          } }
        >
          { getFavoriteRecipeFood(pathID)
            ? <img src={ blackHeartIcon } alt="favorite" data-testid="favorite-btn" />
            : <img src={ whiteHeartIcon } alt="favorite" data-testid="favorite-btn" /> }
        </button>
        <CardCarrossel array={ drinks } type="drink" />
        <button
          type="button"
          data-testid="start-recipe-btn"
          className="button-start-recipe"
          onClick={ startRecipe }
        >
          { recipeLocalStorage ? 'Fazer de novo' : 'Iniciar Receita' }
        </button>
      </div>))
  );
}

export default ShowRecipe;
