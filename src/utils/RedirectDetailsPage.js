import React from 'react';
import { Redirect } from 'react-router';

function RedirectDetailsPage(location, dataFetch) {
  const rota = location.pathname.split('/')[1];
  const DrinkOrFood = rota === 'comidas'
    ? <Redirect to={ `${location.pathname}/${dataFetch[0].idMeal}` } />
    : <Redirect to={ `${location.pathname}/${dataFetch[0].idDrink}` } />;
  return DrinkOrFood;
}

export default RedirectDetailsPage;
