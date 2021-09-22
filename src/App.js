import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Switch from 'react-bootstrap/esm/Switch';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import Profile from './pages/Profile';
import PageComidas from './components/PageComidas';
import PageBebidas from './components/PageBebidas';
import DetailsPageComidas from './components/DetailsPageComidas';
import DetailsPageBebidas from './components/DetailsPageBebidas';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/perfil" component={ Profile } />
      <Route exact path="/comidas" component={ PageComidas } />
      <Route exact path="/bebidas" component={ PageBebidas } />
      <Route exact path="/comidas/:id" component={ DetailsPageComidas } />
      <Route exact path="/bebidas/:id" component={ DetailsPageBebidas } />
    </Switch>
  );
}

export default App;
