import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router';
import fetchFoods, { fetchDrinks } from '../Services/fetchApiFoodsandDrinks';
import myContext from '../context/mycontext';
import RedirectDetailsPage from '../utils/RedirectDetailsPage';
import VerifyFirsLetter from '../utils/VerifyFirstLetter';

export default function SearchHeader() {
  const {
    setMeals,
    setDrinks,
    setResultSearch,
    setCategoryStyle,
    categoryStyle } = useContext(myContext);
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
    const { meals } = result;
    if (!meals) {
      return global.alert(
        'Sinto muito, não encontramos nenhuma receita para esses filtros.',
      );
    }
    setMeals(meals);
    return setDataFetch(meals);
  }

  async function searchSubmitDrink() {
    VerifyFirsLetter(searchData);
    const result = await fetchDrinks(searchData.searchRadio, searchData.searchText);
    const { drinks } = result;
    if (!drinks) {
      return global.alert(
        'Sinto muito, não encontramos nenhuma receita para esses filtros.',
      );
    }
    setDrinks(drinks);
    return setDataFetch(drinks);
  }

  function categoryChange() {
    if (categoryStyle.display === 'none') {
      setCategoryStyle({ display: 'flex' });
    } else setCategoryStyle({ display: 'none' });
  }

  const boolean = true;

  return (
    <div className="search">
      <input
        type="text"
        data-testid="search-input"
        name="searchText"
        onChange={ handleChange }
        className="search-text"
        placeholder="Buscar"
      />
      <div>
        <label htmlFor="ingrediente">
          Ingrediente
          <input
            type="radio"
            className="search-radio"
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
            className="search-radio"
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
            className="search-radio"
            id="primeira"
            data-testid="first-letter-search-radio"
            name="searchRadio"
            value="primeira"
            onChange={ handleChange }
          />
        </label>
      </div>
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
      <button onClick={ categoryChange } type="button">Exibir categorias</button>
      { dataFetch.length === 1 && RedirectDetailsPage(location, dataFetch) }
    </div>
  );
}
