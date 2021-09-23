import React, { useContext, useEffect } from 'react';
import myContext from '../context/mycontext';
import fetchFoods from '../Services/fetchApiFoodsandDrinks';
import Header from './Header';
import ReceitaCard from './ReceitaCard';

export default function PageComidas() {
  const { data, setData } = useContext(myContext);
  const NUMBER = 12;

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
