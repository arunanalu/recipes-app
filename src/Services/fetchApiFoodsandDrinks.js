const fetchFoods = async (search, input) => {
  switch (search) {
  case 'ingrediente': {
    const resultFetch = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`)
      .then((response) => response.json());
    return resultFetch;
  }
  case 'nome': {
    const resultFetch = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
      .then((response) => response.json());
    return resultFetch;
  }
  case 'primeira': {
    const resultFetch = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`)
      .then((response) => response.json());
    return resultFetch;
  }
  case 'semBusca': {
    const resultFetch = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((response) => response.json());
    return resultFetch;
  }
  default:
    console.log('error');
  }
};

export const fetchDrinks = async (search, input) => {
  switch (search) {
  case 'ingrediente': {
    const resultFetch = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${input}`)
      .then((response) => response.json());
    return resultFetch;
  }
  case 'nome': {
    const resultFetch = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
      .then((response) => response.json());
    return resultFetch;
  }
  case 'primeira': {
    const resultFetch = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${input}`)
      .then((response) => response.json());
    return resultFetch;
  }
  case 'semBusca': {
    const resultFetch = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      .then((response) => response.json());
    return resultFetch;
  }
  default:
    console.log('error');
  }
};

export async function fetchIngredients(type) {
  const NUMBER = 12;
  const checkType = type === 'drinks' ? 'thecocktaildb' : 'themealdb';
  const request = await fetch(`https://www.${checkType}.com/api/json/v1/1/list.php?i=list`)
    .then(((res) => res.json()))
    .then((res) => res[type])
    .then((ingredient) => ingredient.slice(0, NUMBER));
  return request;
}

export async function fetchIngredientsArea() {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    .then(((res) => res.json()))
    .then((res) => res.meals);
  return request;
}

export default fetchFoods;
