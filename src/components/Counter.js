import React, { Component } from 'react';
import Content from './Content';

export default class Counter extends Component {
  constructor() {
    super();
    this.state = { counter: 0 }
  }
  handleClick = e =>
      this.setState({ counter: this.state.counter + 1 });

  render = () => <Content>
    <h1 onClick={ this.handleClick }>
      { this.state.counter }
    </h1>
  </Content>
}