import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
// components
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=> {
      this.setState({
        currentUser: user
      })
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact component={HomePage} path='/' />
          <Route exact component={ShopPage} path='/shop' />
          <Route exact component={SignInAndSignUp} path='/signin' />
        </Switch>
      </div>
    );
  }
}

export default App;
