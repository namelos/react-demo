import React, { Component } from 'react';
import Menus from './Menus';
import Body from './Body';
import Canvas from '../components/Canvas';

export default class App extends Component {
  render = () => <div>
    <Menus />
    <Body />
  </div>
}

