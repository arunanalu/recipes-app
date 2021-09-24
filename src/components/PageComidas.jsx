import React, { useContext, useEffect } from 'react';
import myContext from '../context/mycontext';
import fetchFoods from '../Services/fetchApiFoodsandDrinks';
import Filter from './Filter';
import Header from './Header';
import ReceitaCard from './ReceitaCard';

export default function PageComidas() {
  const { data, setData, filter, controlFilter } = useContext(myContext);
  const NUMBER = 12;
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const TYPE = 'meals';

  useEffect(() => {
    async function requisition() {
      const result = await fetchFoods('semBusca');
      setData(result.meals);
    }
    requisition();
  }, [setData]);

  const filterData = (d, k) => {
    if (k) {
      return d.filter((el) => el.strCategory.includes(filter));
    } return d;
  };

  return (
    <div>
      <Header />
      <Filter url={ URL } type={ TYPE } />
      <br />
      { filterData(data, controlFilter).map((comida, index) => {
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
