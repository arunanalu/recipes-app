import React, { useContext, useEffect } from 'react';
import myContext from '../context/mycontext';
import { fetchDrinks } from '../Services/fetchApiFoodsandDrinks';
import Header from './Header';
import ReceitaCard from './ReceitaCard';

export default function PageBebidas() {
  const { data, setData } = useContext(myContext);
  const NUMBER = 12;

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
