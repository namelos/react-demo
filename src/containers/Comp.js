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

class Like extends Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  handleClick = e => this.setState({ liked: !this.state.liked });
  render = () =>
    <h1 onClick={ this.handleClick } style={ styles.h1 }>
      You { this.state.liked ? 'like' : 'have\'t liked' }
      this. Click to toggle.
    </h1>
}

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  handleClick = e => this.setState({ liked: !this.state.liked });
  render = () =>
      <h1 onClick={ this.handleClick } style={ this.state.liked ? styles.red : styles.green }>
        Click to toggle
      </h1>
}

export default class Comp extends Component {
  render = () =>
  <div>
    <MD url="http://localhost:3000/comp.md" />
    <Counter />
    <Counter2 />
    <Like />
    <Toggle />
  </div>
}

const styles={
  h1: {
    fontSize: '30px'
  },
  red: {
    color: 'red'
  },
  green: {
    color: 'green'
  }
};