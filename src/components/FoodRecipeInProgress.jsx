import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import ShowProgress from '../Services/ShowProgress';

export default function FoodRecipeInProgress() {
  const { pathname } = useLocation();
  const [recipe, setRecipe] = useState();
  const type = pathname.split('/')[1];
  const idType = pathname.split('/')[2];
  const ingredients = recipe && recipe[0] !== undefined && Object.entries(recipe[0])
    .filter((value) => value[0].includes('strIngredient'))
    .filter((ingredient) => ingredient[1] !== '' && ingredient[1] !== null)
    .map((value) => value[1]);

  useEffect(() => {
    async function fetchFoodOrDrink() {
      const url = type === 'bebidas' ? `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idType}` : `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idType}`;
      const result = await fetch(url).then((data) => data.json());
      setRecipe(result.meals);
    }
    if (localStorage.getItem('ingredientsCheck') === null) {
      localStorage.setItem('ingredientsCheck', '{}');
    }
    fetchFoodOrDrink();
  }, [pathname, idType, type]);

  return (
    <div>
      {recipe ? <ShowProgress
        recipe={ recipe[0] }
        ingredients={ ingredients }
        type="comidas"
        pathID={ idType }
      /> : <h1>Loading...</h1>}
    </div>
  );
}
