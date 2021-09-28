import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IngredientsCard from '../components/IngredientsCard';
import { fetchIngredients } from '../Services/fetchApiFoodsandDrinks';

export default function FoodsIngredients() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetchIngredients('meals')
      .then((meals) => setIngredients(meals));
  }, []);

  return (
    <div>
      <Header />
      {ingredients.map((ingredient, index) => (
        <IngredientsCard
          key={ index }
          index={ index }
          name={ ingredient.strIngredient }
        />
      ))}
      <Footer />
    </div>
  );
}
