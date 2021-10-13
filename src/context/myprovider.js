import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchFoods, { fetchDrinks } from '../Services/fetchApiFoodsandDrinks';
import myContext from './mycontext';

export default function MyProvider({ children }, usert = '') {
  const [user, setUser] = useState(usert);
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [resultSearch, setResultSearch] = useState({});
  const [startRecipe, setStartRecipe] = useState(false);
  const [recipesInProgress, setRecipeInProgress] = useState([]);
  const [categoryStyle, setCategoryStyle] = useState(true);
  const [display, setDisplay] = useState(false);
  const [separator, setSeparator] = useState(false);
  const contextValue = { user, setUser };
  const context = {
    drinks,
    setDrinks,
    contextValue,
    setMeals,
    resultSearch,
    setResultSearch,
    meals,
    startRecipe,
    setStartRecipe,
    recipesInProgress,
    setRecipeInProgress,
    categoryStyle,
    setCategoryStyle,
    display,
    setDisplay,
    separator,
    setSeparator,
  };

  useEffect(() => {
    fetchFoods('semBusca')
      .then((res) => setMeals(res.meals));
    fetchDrinks('semBusca')
      .then((res) => setDrinks(res.drinks));
  }, []);

  return (
    <myContext.Provider
      value={ context }
    >
      {children}
    </myContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
