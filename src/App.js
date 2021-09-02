import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/Homepage';

const HatPage = () => (
  <div><h1>Hat Page</h1></div>
);

function App() {
  return(
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatPage} />
      </Switch>
    </div>
  )
};

export default App;
