import React from 'react';
import { IndexRoute, Router, Route, Link } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import Es6 from './containers/Es6';
import Jsx from './containers/Jsx';
import Workflow from './containers/Workflow';
import Comp from './containers/Comp';
import Styles from './containers/Styles';
import TopLevel from './containers/TopLevel';
import CompLevel from './containers/CompLevel';
import LifeCycle from './containers/LifeCycle';
import StateAndProps from './containers/StateAndProps';
import Events from './containers/Events';
import Playground from './containers/Playground';

const routes =
  <Router>
    <Route path="/" component={ App } >
      <IndexRoute component={ Home } />
      <Route path="/home" component={ Home } />
      <Route path="/jsx" component={ Jsx } />
      <Route path="/es6" component={ Es6 } />
      <Route path="/lifecycle" component={ LifeCycle } />
      <Route path="/stateandprops" component={ StateAndProps } />
      <Route path="/events" component={ Events } />
      <Route path="/playground" component={ Playground } ></Route>
    </Route>
  </Router>;

export default routes;