export const getFavoriteRecipeFood = (pathId) => {
  const getLocalStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
  return getLocalStorage.some(({ id }) => id === pathId);
};

export default function favoriteRecipeFood(recipe, pathId) {
  const { idMeal,
    Type = 'comida',
    strArea, strCategory = '', strMeal, strMealThumb } = recipe[0];
  const getLocalStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const findRecipe = getLocalStorage.some((receita) => receita.id === pathId);

  if (findRecipe) {
    const removeRecipe = getLocalStorage.filter((remove) => remove.id !== pathId);
    return localStorage.setItem('favoriteRecipes', JSON.stringify(removeRecipe));
  }
  const setLocalStorage = JSON.stringify(
    [
      ...getLocalStorage,
      {
        id: idMeal,
        type: Type,
        area: strArea,
        category: strCategory,
        name: strMeal,
        alcoholicOrNot: '',
        image: strMealThumb,
      },
    ],
  );
  localStorage.setItem('favoriteRecipes', setLocalStorage);
}

export function favoriteRecipeDrink(recipe, pathId) {
  const { idDrink,
    Type = 'bebida',
    strArea = '', strCategory = '', strDrink, strDrinkThumb, strAlcoholic } = recipe[0];
  const getLocalStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const findRecipe = getLocalStorage.some((receita) => receita.id === pathId);

  if (findRecipe) {
    const removeRecipe = getLocalStorage.filter((remove) => remove.id !== pathId);
    return localStorage.setItem('favoriteRecipes', JSON.stringify(removeRecipe));
  }
  const setLocalStorage = JSON.stringify(
    [
      ...getLocalStorage,
      {
        id: idDrink,
        type: Type,
        area: strArea,
        category: strCategory,
        name: strDrink,
        image: strDrinkThumb,
        alcoholicOrNot: strAlcoholic,
      },
    ],
  );
  localStorage.setItem('favoriteRecipes', setLocalStorage);
}
