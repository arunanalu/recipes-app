import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IngredientsCard from '../components/IngredientsCard';
import { fetchIngredients } from '../Services/fetchApiFoodsandDrinks';
import '../css/exploreIngredients.css';

export default function DrinksIngredients() {
  const [drinksIngredients, setDrinksIngredients] = useState([]);

  useEffect(() => {
    fetchIngredients('drinks')
      .then((drinks) => setDrinksIngredients(drinks));
  }, []);
  return (
    <div className="ingredients-principal">
      <Header />
      <div className="ingredients">
        <div className="ingredients-container">
          { drinksIngredients.map((bebida, index) => (
            <IngredientsCard
              key={ index }
              index={ index }
              name={ bebida.strIngredient1 }
            />
          ))}
          <Footer />
        </div>
      </div>
      {/* <div className="separator" /> */}
    </div>
  );
}
