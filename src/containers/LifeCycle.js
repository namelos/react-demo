import React, { Component } from 'react';
import MD from '../components/MD';
import Content from '../components/Content';
import Methods from '../components/Methods';

export default class LifeCycle extends Component {
  render = () => <div>
    <Methods />
    <MD url="http://localhost:3000/lifecycle.md" />
  </div>
}