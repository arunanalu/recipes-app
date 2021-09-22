import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Switch from 'react-bootstrap/esm/Switch';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import Explore from './pages/Explore';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/explorar" component={ Explore } />
      <Route exact path="/explorar/comidas" component={ ExploreFoods } />
      <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
    </Switch>
  );
}

export default App;
