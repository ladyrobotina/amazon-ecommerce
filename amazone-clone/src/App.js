import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const promise = loadStripe('pk_test_51I1jzhI907hc4vDqDTAawrTaTVdMLGF5c9iR9ZH2zMph9PBaNhOguyoM4dpLYbguAAOpB1KKX4hGrgXHenkEl8j8001AhFkXc5');

function App() {

  const [{basket, user}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads ...
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // the user is logged in / the user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
    <div className="app">
      
      <Switch>
      <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          {/* Header */}
          <Header />
          <Checkout />
        </Route>
        <Route path="/payment">
          {/* Header */}
          <Header />
          <Elements stripe={promise}>

          <Payment />
          </Elements>
        </Route>
        <Route path="/">
          {/* Header */}
          <Header />
          {/* Home */}
          <Home />
      </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
