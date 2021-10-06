import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import useCategoryApi from '../hooks/useCategoryApi';
import myContext from '../context/mycontext';
import fetchFoods, { fetchDrinks } from '../Services/fetchApiFoodsandDrinks';

export default function Filter({ urlCategory, type, urlCategoryCard }) {
  const location = useLocation();
  const [category, loading] = useCategoryApi(urlCategory);
  const [btn, setBtn] = useState('');
  const { setMeals, setDrinks } = useContext(myContext);
  const QUATRO = 4;
  let result = [];
  if (loading === true) result = category[type];

  const applyFilter = async (event, categoria) => {
    if (event.target === btn) {
      event.persist();
      setBtn('');
      if (type === 'meals') {
        let res = await fetchFoods('semBusca');
        res = res[type];
        setMeals(res);
      } else {
        let res = await fetchDrinks('semBusca');
        res = res[type];
        setDrinks(res);
      }
    } else {
      event.persist();
      let response = await fetch(`${urlCategoryCard}${categoria}`);
      response = await response.json();
      response = response[type];
      setBtn(event.target);
      return location.pathname === '/bebidas' ? setDrinks(response) : setMeals(response);
    }
  };

  const allFilter = async () => {
    if (type === 'meals') {
      let res = await fetchFoods('semBusca');
      res = res[type];
      setMeals(res);
    } else {
      let res = await fetchDrinks('semBusca');
      res = res[type];
      setDrinks(res);
    }
    setBtn('');
  };

  return (
    <div className="filter">
      {result.map(
        (element, index) => index <= QUATRO && (
          <button
            type="button"
            key={ index }
            data-testid={ `${element.strCategory}-category-filter` }
            onClick={ (event) => applyFilter(event, element.strCategory) }
          >
            {element.strCategory}
          </button>),
      )}
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ allFilter }
      >
        All
      </button>
    </div>
  );
}

Filter.propTypes = {
  urlCategory: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  urlCategoryCard: PropTypes.string.isRequired,
};
