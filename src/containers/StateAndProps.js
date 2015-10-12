import React, { Component } from 'react';
import MD from '../components/md';
import Counter2 from '../components/Counter2';

export default class StateAndProps extends Component {
  render = () => <div>
    <Counter2 />
    <MD url="http://localhost:3000/stateandprops.md" />
  </div>
}