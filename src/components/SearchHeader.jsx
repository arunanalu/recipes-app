import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import fetchFoods, { fetchDrinks } from '../Services/fetchApiFoodsandDrinks';
import myContext from '../context/mycontext';
import RedirectDetailsPage from '../utils/RedirectDetailsPage';

export default function SearchHeader({ display }) {
  const { setData, setResultSearch } = useContext(myContext);
  const location = useLocation();
  const [searchData, setSearchData] = useState({
    searchText: '',
    searchRadio: 'ingrediente',
  });

  const [dataFetch, setDataFetch] = useState([]);

  function handleChange({ target: { name, value } }) {
    setSearchData({
      ...searchData,
      [name]: value,
    });
  }

  async function searchSubmitFood() {
    if (searchData.searchRadio === 'primeira' && searchData.searchText.length > 1) {
      return global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
    const result = await fetchFoods(searchData.searchRadio, searchData.searchText);
    setData(result.meals);
    if (result.meals === 0) {
      return global.alert(
        'Sinto muito, não encontramos nenhuma receita para esses filtros.',
      );
    }
    return setDataFetch(result.meals);
  }

  async function searchSubmitDrink() {
    if (searchData.searchRadio === 'primeira' && searchData.searchText.length > 1) {
      return global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
    const result = await fetchDrinks(searchData.searchRadio, searchData.searchText);
    if (result.drinks === 0) {
      return global.alert(
        'Sinto muito, não encontramos nenhuma receita para esses filtros.',
      );
    }
    setData(result.drinks);
    return setDataFetch(result.drinks);
  }

  const boolean = true;

  return (
    <div style={ display }>
      <input
        type="text"
        data-testid="search-input"
        style={ display }
        name="searchText"
        onChange={ handleChange }
      />
      <label htmlFor="ingrediente">
        Ingrediente
        <input
          type="radio"
          id="ingrediente"
          data-testid="ingredient-search-radio"
          name="searchRadio"
          value="ingrediente"
          onChange={ handleChange }
          checked={ searchData.searchRadio === 'ingrediente' ? boolean : !boolean }
        />
      </label>
      <label htmlFor="nome">
        Nome
        <input
          type="radio"
          id="nome"
          data-testid="name-search-radio"
          name="searchRadio"
          value="nome"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="primeira">
        Primeira Letra
        <input
          type="radio"
          id="primeira"
          data-testid="first-letter-search-radio"
          name="searchRadio"
          value="primeira"
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ async () => {
          setResultSearch(searchData);
          return location.pathname === '/comidas'
            ? searchSubmitFood() : searchSubmitDrink();
        } }
      >
        Buscar
      </button>
      { dataFetch.length === 1 && RedirectDetailsPage(location, dataFetch) }
    </div>
  );
}

SearchHeader.propTypes = {
  display: PropTypes.objectOf(PropTypes.any).isRequired,
};
