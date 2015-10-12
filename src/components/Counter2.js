import React, { Component } from 'react';
import Content from './Content';

class MinCounter extends Component {
  render = () =>
    <h1>{ this.props.counter }</h1>;
}

//const MinCounter = props =>
//  <h1>{ this.props.counter }</h1>;

export default class Counter2 extends Component {
  constructor() {
    super();
    this.state = { counter: 0 }
  }
  handleClick = e =>
      this.setState({ counter: this.state.counter + 1 });

  render = () => <Content>
    <MinCounter counter={ this.state.counter }/>
    <button onClick={ this.handleClick }>Click</button>
  </Content>
}