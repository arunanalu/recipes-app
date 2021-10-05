import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../context/mycontext';
import Filter from './Filter';
import Header from './Header';
import Footer from './Footer';
import ReceitaCard from './ReceitaCard';
import '../css/telaPrincipal.css';

export default function PageComidas() {
  const { meals } = useContext(myContext);
  const NUMBER = 12;
  const URL_CATEGORY = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const URL_FOODSCATEGORY = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
  const TYPE = 'meals';
  const PAGE = 'comidas';

  return (
    <div>
      <Header />
      <Filter
        urlCategory={ URL_CATEGORY }
        type={ TYPE }
        urlCategoryCard={ URL_FOODSCATEGORY }
      />
      <br />
      { meals.map((comida, index) => {
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
                page={ PAGE }
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
