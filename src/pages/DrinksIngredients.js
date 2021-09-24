import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import IngredientsCard from '../components/IngredientsCard';
import { fetchIngredients } from '../Services/fetchApiFoodsandDrinks';

export default function DrinksIngredients() {
  const [drinksIngredients, setDrinksIngredients] = useState([]);

  useEffect(() => {
    fetchIngredients('drinks')
      .then((drinks) => setDrinksIngredients(drinks));
  }, []);
  return (
    <div>
      { drinksIngredients.map((bebida, index) => (
        <IngredientsCard
          key={ index }
          index={ index }
          name={ bebida.strIngredient1 }
        />
      ))}
      <Footer />
    </div>
  );
}
