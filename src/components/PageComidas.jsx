import React, { useContext } from 'react';
import myContext from '../context/mycontext';
import Header from './Header';
import ReceitaCard from './ReceitaCard';

export default function PageComidas() {
  const { data } = useContext(myContext);
  const NUMBER = 12;
  return (
    <div>
      <Header />
      <br />
      <h1>Comidas</h1>
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
