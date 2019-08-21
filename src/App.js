import React from 'react';
import { Switch ,Route } from 'react-router-dom';

import './App.css';
// components
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <Switch>
      <Route exact component={HomePage} path='/' />
      <Route exact component={ShopPage} path='/shop' />
    </Switch>
  );
}

export default App;
