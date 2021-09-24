import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router';
import fetchFoods, { fetchDrinks } from '../Services/fetchApiFoodsandDrinks';
import myContext from '../context/mycontext';
import RedirectDetailsPage from '../utils/RedirectDetailsPage';
import VerifyFirsLetter from '../utils/VerifyFirstLetter';

export default function SearchHeader() {
  const { setData, setResultSearch, setControlFilter } = useContext(myContext);
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
    VerifyFirsLetter(searchData);
    const result = await fetchFoods(searchData.searchRadio, searchData.searchText);
    if (result.meals === 0 || result.meals === null) {
      return global.alert(
        'Sinto muito, não encontramos nenhuma receita para esses filtros.',
      );
    }
    setControlFilter(false);
    setData(result.meals);
    return setDataFetch(result.meals);
  }

  async function searchSubmitDrink() {
    VerifyFirsLetter(searchData);
    const result = await fetchDrinks(searchData.searchRadio, searchData.searchText);
    if (result.drinks === 0 || result.drinks === null) {
      return global.alert(
        'Sinto muito, não encontramos nenhuma receita para esses filtros.',
      );
    }
    setControlFilter(false);
    setData(result.drinks);
    return setDataFetch(result.drinks);
  }

  const boolean = true;

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
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
