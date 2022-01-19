import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import config from './pages/config';
import Jogo from './pages/Jogo';
import feedback from './pages/feedback';
import './App.css';
import './index.css';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/config" component={ config } />
        <Route path="/jogo" render={ (props) => <Jogo { ...props } /> } />
        <Route exact path="/feedback" component={ feedback } />
      </Switch>
    </div>
  );
}
