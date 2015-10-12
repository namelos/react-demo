import React, { Component } from 'react';
import MD from '../components/md';
import EventHandler from '../components/EventHandler';
import Counter from '../components/Counter';

export default class Events extends Component {
  render = () => <div>
    <Counter />
    <MD url="http://localhost:3000/events.md" />
  </div>
}