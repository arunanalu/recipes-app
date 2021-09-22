import React from 'react';
import { useHistory } from 'react-router';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

export default function Footer() {
  const history = useHistory();

  return (
    <footer data-testid="footer">
      <input
        type="image"
        onClick={ () => history.push('/bebidas') }
        data-testid="drinks-bottom-btn"
        src={ drinkIcon }
        alt="Ícone de drinks"
      />
      <input
        type="image"
        onClick={ () => history.push('/explorar') }
        data-testid="explore-bottom-btn"
        src={ exploreIcon }
        alt="Ícone de bússola"
      />
      <input
        type="image"
        onClick={ () => history.push('/comidas') }
        data-testid="food-bottom-btn"
        src={ mealIcon }
        alt="Ícone de comida"
      />
    </footer>
  );
}
