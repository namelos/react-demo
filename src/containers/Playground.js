import React, { Component } from 'react';
import Content from '../components/Content';
import EventHandler from '../components/EventHandler';

export default class Playground extends Component {
  render = () => <h1>
    <EventHandler />
  </h1>
}