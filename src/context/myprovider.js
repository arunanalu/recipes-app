import PropTypes from 'prop-types';
import React, { useState } from 'react';
import myContext from './mycontext';

export default function MyProvider({ children }, usert = '') {
  const [user, setUser] = useState(usert);
  const [data, setData] = useState([]);
  const [resultSearch, setResultSearch] = useState({});
  const [startRecipe, setStartRecipe] = useState(false);
  const [recipesInProgress, setRecipeInProgress] = useState([]);
  const contextValue = { user, setUser };
  const context = {
    contextValue,
    setData,
    resultSearch,
    setResultSearch,
    data,
    startRecipe,
    setStartRecipe,
    recipesInProgress,
    setRecipeInProgress,
  };
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
