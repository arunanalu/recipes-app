import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../context/mycontext';
import { fetchDrinks } from '../Services/fetchApiFoodsandDrinks';
import Filter from './Filter';
import Header from './Header';
import ReceitaCard from './ReceitaCard';

export default function PageBebidas() {
  const { data, setData } = useContext(myContext);
  const NUMBER = 12;
  const URL_CATEGORY = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const URL_DRINKCATEGORY = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';
  const TYPE = 'drinks';
  const PAGE = 'bebidas';

  useEffect(() => {
    async function requisition() {
      const result = await fetchDrinks('semBusca');
      setData(result.drinks);
    }
    requisition();
  }, [setData]);

  return (
    <div>
      <Header />
      <Filter
        urlCategory={ URL_CATEGORY }
        type={ TYPE }
        urlCategoryCard={ URL_DRINKCATEGORY }
      />
      <br />
      { data.map((bebida, index) => {
        if (index < NUMBER) {
          return (
            <Link
              to={ {
                pathname: `/bebidas/${bebida.idDrink}`,
                state: { name: bebida.strDrink },
              } }
            >
              <ReceitaCard
                key={ bebida.idDrink }
                thumb={ bebida.strDrinkThumb }
                index={ index }
                name={ bebida.strDrink }
                page={ PAGE }
                id={ bebida.idDrink }
              />
            </Link>
          );
        }
        return false;
      }) }
    </div>
  );
}
