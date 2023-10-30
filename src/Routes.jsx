// src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pricing" component={Pricing} />
      </Switch>
    </Router>
  );
};

export default Routes;