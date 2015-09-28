import React from 'react';
import { IndexRoute, Router, Route, Link } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import Immutable from './containers/Immutable';
import Redux from './containers/Redux';
import Routing from './containers/Routing';

const routes =
  <Router>
    <Route path="/" component={ App } >
      <IndexRoute component={ Home } />
      <Route path="/home" component={ Home } />
      <Route path="/routing" component={ Routing } />
      <Route path="/redux" component={ Redux } />
      <Route path="/immutable" component={ Immutable } />
    </Route>
  </Router>;

export default routes;