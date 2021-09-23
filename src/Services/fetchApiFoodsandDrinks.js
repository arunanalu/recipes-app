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

export default fetchFoods;
