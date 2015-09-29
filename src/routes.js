import React from 'react';
import { IndexRoute, Router, Route, Link } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import Jsx from './containers/Jsx';
import Workflow from './containers/Workflow';
import Comp from './containers/Comp';
import Styles from './containers/Styles';
import TopLevel from './containers/TopLevel';
import CompLevel from './containers/CompLevel';
import LifeCycle from './containers/LifeCycle';

const routes =
  <Router>
    <Route path="/" component={ App } >
      <IndexRoute component={ Home } />
      <Route path="/home" component={ Home } />
      <Route path="/jsx" component={ Jsx } />
      <Route path="/workflow" component={ Workflow } />
      <Route path="/comp" component={ Comp } />
      <Route path="/styles" component={ Styles } />
      <Route path="/toplevel" component={ TopLevel } />
      <Route path="/complevel" component={ CompLevel } />
      <Route path="/lifecycle" component={ LifeCycle } />
    </Route>
  </Router>;

export default routes;