import React, { useContext, useEffect } from 'react';
import myContext from '../context/mycontext';
import { fetchDrinks } from '../Services/fetchApiFoodsandDrinks';
import Filter from './Filter';
import Header from './Header';
import ReceitaCard from './ReceitaCard';

export default function PageBebidas() {
  const { data, setData } = useContext(myContext);
  const NUMBER = 12;
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const TYPE = 'drinks';

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
      <Filter url={ URL } type={ TYPE } />
      <br />
      { data.map((bebida, index) => {
        if (index < NUMBER) {
          return (<ReceitaCard
            key={ bebida.idDrink }
            thumb={ bebida.strDrinkThumb }
            index={ index }
            name={ bebida.strDrink }
          />);
        }
        return false;
      }) }
    </div>
  );
}
