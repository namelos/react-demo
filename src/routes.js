import React from 'react';
import { IndexRoute, Router, Route, Link } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import Jsx from './containers/Jsx';

const routes =
  <Router>
    <Route path="/" component={ App } >
      <IndexRoute component={ Home } />
      <Route path="/home" component={ Home } />
      <Route path="/jsx" component={ Jsx } />
    </Route>
  </Router>;

export default routes;