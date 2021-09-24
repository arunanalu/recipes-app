import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
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
