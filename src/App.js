import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/perfil" component={ Profile } />
    </Switch>
  );
}

export default App;
