import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ReceitaCard from '../components/ReceitaCard';
import useAreasApi from '../hooks/useAreaApi';
import fetchAreaFoods from '../Services/fetchArea';

export default function ExploreIngredientsArea() {
  const [area, setArea] = useState('American');
  const [result, setResult] = useState([]);
  const [areas] = useAreasApi();
  let temp = [];
  if (result.length !== 0) temp = result.meals;
  const NUMBER = 12;

  useEffect(() => {
    async function requisition() {
      const res = await fetchAreaFoods(area);
      setResult(res);
    }
    requisition();
  }, [area]);

  console.log(result);

  return (
    <div>
      <Header />
      <select
        data-testid="explore-by-area-dropdown"
        onChange={ (event) => setArea(event.target.value) }
      >
        {areas.map(({ strArea }) => (
          <option data-testid={ `${strArea}-option` } key={ strArea } value={ strArea }>
            {strArea}
          </option>
        ))}
      </select>
      { temp.map((comida, index) => {
        if (index < NUMBER) {
          return (
            <Link
              to={ {
                pathname: `/comidas/${comida.idMeal}`,
                state: { name: comida.strMeal },
              } }
              key={ comida.idMeal }
            >
              <ReceitaCard
                thumb={ comida.strMealThumb }
                index={ index }
                name={ comida.strMeal }
                id={ comida.idMeal }
              />
            </Link>
          );
        }
        return false;
      }) }
      <div className="separator" />
      <Footer />
    </div>
  );
}
