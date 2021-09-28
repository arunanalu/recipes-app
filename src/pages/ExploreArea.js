import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fetchIngredientsArea } from '../Services/fetchApiFoodsandDrinks';

export default function ExploreIngredientsArea() {
  const [areas, setArea] = useState([]);

  useEffect(() => {
    fetchIngredientsArea()
      .then((meals) => setArea(meals));
  }, []);

  return (
    <div>
      <Header />
      <select data-testid="explore-by-area-dropdown">
        {areas.map(({ strArea }) => (
          <option data-testid={ `${strArea}-option` } key={ strArea } value={ strArea }>
            {strArea}
          </option>
        ))}
      </select>
      <Footer />
    </div>
  );
}
