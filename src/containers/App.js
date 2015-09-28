import React, { Component } from 'react';
import Head from './Head';

export default class App extends Component {
  render = () => <div>
    <Head />
    { this.props.children }
  </div>
}