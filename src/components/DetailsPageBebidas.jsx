import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import myContext from '../context/mycontext';
import 'react-toastify/dist/ReactToastify.css';
import ShowRecipeDrinks from '../Services/ShowRecipeDrinks';
import '../css/details.css';

export default function DetailsPageBebidas() {
  const { recipesInProgress, setRecipeInProgress } = useContext(myContext);
  const { pathname } = useLocation();
  const [revenue, setRevenue] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const [foods, setFoods] = useState([]);
  const pathID = pathname.split('/')[2];
  const recipeLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'))
    ? JSON.parse(localStorage.getItem('inProgressRecipes')).cocktails[pathID] : false;

  const fetchFoods = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  useEffect(() => {
    const fetchURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${pathID}`;
    async function fetchApi() {
      const result = await fetch(fetchURL).then((response) => response.json());
      const resultFoods = await fetch(fetchFoods).then((response) => response.json());
      setRevenue(result.drinks);
      const NUMBER_SIX = 6;
      setFoods(resultFoods.meals.filter((_drink, position) => position < NUMBER_SIX));
      if (localStorage.getItem('inProgressRecipes') === null) {
        localStorage.setItem('inProgressRecipes',
          JSON.stringify({ meals: {}, cocktails: {} }));
      }
    }
    fetchApi();
  }, [pathname, pathID]);

  return (
    <div className="details">
      { revenue && <ShowRecipeDrinks
        revenue={ revenue }
        favorite={ favorite }
        setFavorite={ setFavorite }
        pathID={ pathID }
        foods={ foods }
        recipeLocalStorage={ recipeLocalStorage }
        recipesInProgress={ recipesInProgress }
        setRecipeInProgress={ setRecipeInProgress }
      /> }
    </div>
  );
}
