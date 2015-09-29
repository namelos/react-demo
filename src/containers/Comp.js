import React, { Component } from 'react';
import MD from '../components/MD';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state= { counter: 0 };
  }

  handleClick = () =>
    this.setState({ counter: this.state.counter + 1 });

  render = () => <div>
    <h2>{ this.state.counter }</h2>
    <button onClick={ this.handleClick }>Increment</button>
  </div>
}

var Counter2 = React.createClass({
  getInitialState: function() {
    return this.state = { counter: 0 }
  },
  handleClick: function() {
    this.setState({ counter: this.state.counter + 1 })
  },
  render: function() {
    return ( <div>
      <h2>{ this.state.counter }</h2>
      <button onClick={ this.handleClick }>Increment</button>
    </div>)
  }
});

export default class Comp extends Component {
  render = () =>
  <div>
    <MD url="http://localhost:3000/comp.md" />
    <Counter />
    <Counter2 />
  </div>
}

const styles={
  height: '100px',
  width: '250px'
};