import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
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
