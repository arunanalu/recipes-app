import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import Explore from './pages/Explore';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import Profile from './pages/Profile';
import PageComidas from './components/PageComidas';
import PageBebidas from './components/PageBebidas';
import DetailsPageComidas from './components/DetailsPageComidas';
import DetailsPageBebidas from './components/DetailsPageBebidas';
import FoodsIngredients from './pages/FoodsIngredients';
import DrinksIngredients from './pages/DrinksIngredients';
import ExploreArea from './pages/ExploreArea';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/explorar" component={ Explore } />
      <Route exact path="/explorar/comidas" component={ ExploreFoods } />
      <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
      <Route exact path="/perfil" component={ Profile } />
      <Route exact path="/comidas" component={ PageComidas } />
      <Route exact path="/bebidas" component={ PageBebidas } />
      <Route exact path="/comidas/:id" component={ DetailsPageComidas } />
      <Route exact path="/bebidas/:id" component={ DetailsPageBebidas } />
      <Route
        exact
        path="/explorar/comidas/ingredientes"
        component={ FoodsIngredients }
      />
      <Route
        exact
        path="/explorar/comidas/area"
        component={ ExploreArea }
      />
      <Route
        exact
        path="/explorar/bebidas/ingredientes"
        component={ DrinksIngredients }
      />
    </Switch>
  );
}

export default App;
