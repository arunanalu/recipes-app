import React, { useContext } from 'react';
import myContext from '../context/mycontext';
import Footer from './Footer';
import Header from './Header';
import ReceitaCard from './ReceitaCard';

export default function PageBebidas() {
  const { data } = useContext(myContext);
  const NUMBER = 12;
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
      <Footer />
    </div>
  );
}
