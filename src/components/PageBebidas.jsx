import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../context/mycontext';
import Filter from './Filter';
import Header from './Header';
import Footer from './Footer';
import ReceitaCard from './ReceitaCard';
import '../css/telaPrincipal.css';

export default function PageBebidas() {
  const { drinks, categoryStyle } = useContext(myContext);
  const NUMBER = 120;
  const URL_CATEGORY = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const URL_DRINKCATEGORY = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';
  const TYPE = 'drinks';
  const PAGE = 'bebidas';
  const styleFilter = categoryStyle === true ? { display: 'none' } : { display: 'flex' };
  const styleMain = categoryStyle === true ? { display: 'flex' } : { display: 'none' };

  return (
    <div className="principal">
      <Header />
      <Filter
        urlCategory={ URL_CATEGORY }
        type={ TYPE }
        urlCategoryCard={ URL_DRINKCATEGORY }
        styleFilter={ styleFilter }
      />
      <br />
      <div className="cardContainer" style={ styleMain }>
        { drinks.map((bebida, index) => {
          if (index < NUMBER) {
            return (
              <Link
                to={ {
                  pathname: `/bebidas/${bebida.idDrink}`,
                  state: { name: bebida.strDrink },
                } }
                key={ bebida.idDrink }
                className="principalLink"
              >
                <ReceitaCard
                  thumb={ bebida.strDrinkThumb }
                  index={ index }
                  name={ bebida.strDrink }
                  page={ PAGE }
                  id={ bebida.idDrink }
                />
              </Link>
            );
          }
          return false;
        }) }
      </div>
      <div className="separator" />
      <Footer />
    </div>
  );
}
