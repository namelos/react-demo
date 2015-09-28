import React, { Component } from 'react';
import Head from './Head';
import Canvas from '../components/Canvas';

export default class App extends Component {
  render = () => <div>
    <Head />
    { this.props.children }
  </div>
}