import React from 'react';
import { Switch ,Route } from 'react-router-dom';

import './App.css';
// components
import HomePage from './pages/homepage/homepage.component';

function App() {
  const Hats = () =>(
    <div>Hello</div>
  )
  return (
    <Switch>
      <Route exact component={HomePage} path='/' />
      <Route exact component={Hats} path='/hats' />
    </Switch>
  );
}

export default App;
