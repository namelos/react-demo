import React from 'react';
import { Router, Route, Link } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import Immutable from './containers/Immutable';
import Redux from './containers/Redux';
import Routing from './containers/Routing';

const route =
  <Router>
    <Route path="/" component={ App } >
      <Route path="/home" component={ Home } />
      <Route path="/routing" component={ Routing } />
      <Route path="/redux" component={ Redux } />
      <Route path="/immutable" component={ Immutable } />
    </Route>
  </Router>;

export default route;
