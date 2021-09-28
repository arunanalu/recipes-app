import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../context/mycontext';
import fetchFoods from '../Services/fetchApiFoodsandDrinks';
import Filter from './Filter';
import Header from './Header';
import ReceitaCard from './ReceitaCard';

export default function PageComidas() {
  const { data, setData } = useContext(myContext);
  const NUMBER = 12;
  const URL_CATEGORY = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const URL_FOODSCATEGORY = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
  const TYPE = 'meals';
  const PAGE = 'comidas';

  useEffect(() => {
    async function requisition() {
      const result = await fetchFoods('semBusca');
      setData(result.meals);
    }
    requisition();
  }, [setData]);

  return (
    <div>
      <Header />
      <Filter
        urlCategory={ URL_CATEGORY }
        type={ TYPE }
        urlCategoryCard={ URL_FOODSCATEGORY }
      />
      <br />
      { data.map((comida, index) => {
        if (index < NUMBER) {
          return (
            <Link
              to={ {
                pathname: `/comidas/${comida.idMeal}`,
                state: { name: comida.strMeal },
              } }
            >
              <ReceitaCard
                key={ comida.idMeal }
                thumb={ comida.strMealThumb }
                index={ index }
                name={ comida.strMeal }
                page={ PAGE }
                id={ comida.idMeal }
              />
            </Link>
          );
        }
        return false;
      }) }
    </div>
  );
}
