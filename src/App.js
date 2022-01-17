import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import config from './pages/config';
import Jogo from './pages/Jogo';
// import logo from './trivia.png';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/config" component={ config } />
        <Route path="/jogo" component={ Jogo } />
      </Switch>
    </div>
  );
}
