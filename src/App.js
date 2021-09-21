import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router';
import Login from './pages/Login';
import Profile from './pages/Profile';
import PageComidas from './components/PageComidas';
import PageBebidas from './components/PageBebidas';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/perfil" component={ Profile } />
      <Route exact path="/comidas" component={ PageComidas } />
      <Route exact path="/bebidas" component={ PageBebidas } />
    </Switch>
  );
}

export default App;
