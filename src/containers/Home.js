import React, { Component } from 'react';
import MD from '../components/MD';

export default class Home extends Component {
  render = () =>
    <MD url="http://localhost:3000/home.md" />
}