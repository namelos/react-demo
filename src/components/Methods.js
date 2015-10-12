import React, { Component } from 'react';
import Content from './Content';

export default class Methods extends Component {
  static defaultProps = { number: 0 };

  state = { counter: 0 };

  handleClick = () =>
    this.setState({ counter: this.state.counter + 1 });

  render = () => <Content>
    <h1 onClick={ this.handleClick }>
      State:{ this.state.counter },
      Props:{ this.props.number }
    </h1>
  </Content>
}