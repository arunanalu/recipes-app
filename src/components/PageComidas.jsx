import React, { useContext, useEffect } from 'react';
import myContext from '../context/mycontext';
import fetchFoods from '../Services/fetchApiFoodsandDrinks';
import Filter from './Filter';
import Header from './Header';
import ReceitaCard from './ReceitaCard';

export default function PageComidas() {
  const { data, setData } = useContext(myContext);
  const NUMBER = 12;
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const TYPE = 'meals';
  console.log(data);

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
      <Filter url={ URL } type={ TYPE } />
      <br />
      { data.map((comida, index) => {
        if (index < NUMBER) {
          return (<ReceitaCard
            key={ comida.idMeal }
            thumb={ comida.strMealThumb }
            index={ index }
            name={ comida.strMeal }
          />);
        }
        return false;
      }) }
    </div>
  );
}
