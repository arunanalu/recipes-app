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

  // console.log(recipeLocalStorage);

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
      cocktails: {
        ...recipesLocalStorage.cocktails,
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
      <div key={ recipe.idDrink }>
        <div className="details-img-container">
          <img
            src={ recipe.strDrinkThumb }
            alt="revenue-img"
            data-testid="recipe-photo"
            width={ 100 }
            className="details-img"
          />
        </div>
        <div className="details-title-container">
          <h4 data-testid="recipe-title">{recipe.strDrink}</h4>
          <p data-testid="recipe-category">{ recipe.strAlcoholic }</p>
        </div>
        <h4 className="details-ingredientes-title">Ingredientes:</h4>
        <div className="details-ingredients-container">
          {arr[0] !== undefined
        && Object.entries(arr[0])
          .filter((value) => value[0].includes('strIngredient'))
          .filter((ingredient) => ingredient[1] !== '' && ingredient[1] !== null)
          .map((response, index) => (
            <p
              data-testid={ `${index}-ingredient-name-and-measure` }
              key={ response[1] }
            >
              <strong>{`${response[1]} - `}</strong>
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
        </div>
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
        <h4 className="how-to">Como fazer:</h4>
        <div className="desc-container">
          <p data-testid="instructions">{ recipe.strInstructions }</p>
        </div>
        <div className="btn-container">
          <button className="copy-btn" type="button" onClick={ copyToClipboard }>
            <FcShare fontSize={ 40 } data-testid="share-btn" />
            <ToastContainer />
          </button>
          <button
            type="button"
            className="favorite-btn"
            onClick={ () => {
              setFavorite(!favorite);
              favoriteRecipeDrink(revenue, pathID);
            } }
          >
            { getFavoriteRecipeFood(pathID)
              ? <img src={ blackHeartIcon } alt="favorite" data-testid="favorite-btn" />
              : <img src={ whiteHeartIcon } alt="favorite" data-testid="favorite-btn" /> }
          </button>
        </div>
        <h5 className="recomendations">Recomendado</h5>
        <CardCarrossel array={ foods } type="food" />
        <div className="separator" />
        <div className="details-footer">
          <div className="footer-flex">
            <button
              type="button"
              data-testid="start-recipe-btn"
              className="details-footer-btn"
              onClick={ startRecipe }
            >
              { recipeLocalStorage ? 'Fazer de novo' : 'Iniciar Receita' }
            </button>
            <button
              type="button"
              className="details-footer-btn"
              onClick={ () => history.push('/bebidas') }
            >
              Voltar
            </button>
          </div>
        </div>
      </div>))
  );
}

export default ShowRecipeDrinks;
