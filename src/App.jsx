import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import './App.css';
import { STRIPE_PUB } from './config';
import Payments from './views/Payments';
import Profile from './views/Profile';
import MyStory from './views/MyStory';
import FindMe from './views/FindMe';

const stripePromise = loadStripe(STRIPE_PUB);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pay">
          <Elements stripe={stripePromise}>
            <Payments />
          </Elements>
        </Route>
        <Route path="/">
          <Profile />
          <MyStory />
          <FindMe />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
