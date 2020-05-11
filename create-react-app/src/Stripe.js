import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Checkout from './components/Checkout';
import Success from './components/Success';
import Canceled from './components/Canceled';

import './css/normalize.css';
import './css/global.css';

function Index() {

  return (
    <Router>
      <Switch>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/canceled">
          <Canceled />
        </Route>
        <Route path="/">
          <Checkout />
        </Route>
      </Switch>
    </Router>
  );
}

export default withRoot(Index);
