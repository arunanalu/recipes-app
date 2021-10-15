import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IngredientsCard from '../components/IngredientsCard';
import { fetchIngredients } from '../Services/fetchApiFoodsandDrinks';
import '../css/exploreIngredients.css';

export default function FoodsIngredients() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetchIngredients('meals')
      .then((meals) => setIngredients(meals));
  }, []);

  return (
    <div>
      <Header />
      <div className="ingredients">
        <div className="ingredients-container">
          {ingredients.map((ingredient, index) => (
            <IngredientsCard
              key={ index }
              index={ index }
              name={ ingredient.strIngredient }
            />
          ))}
        </div>
      </div>
      {/* <div className="separator" /> */}
      <Footer />
    </div>
  );
}
