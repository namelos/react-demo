import React, { Component } from 'react';
import { Map, List } from 'immutable';

export default class EventHandler extends Component {
  constructor () {
    super();
    this.state = { data: Map({
      name: null,
      pass: null
    })}
  }
  handleClick = type => e =>
      this.setState(({data}) => ({
        data: data.set(type, this.refs[type].value
        )}));

  render = () => <div>
    <input type="text" ref="name" />
    <button onClick={ this.handleClick('name') }>name</button>
    <input type="password" ref="pass"/>
    <button onClick={ this.handleClick('pass') }>password</button>
    <p>name: { this.state.data.get('name') }</p>
    <p>password: { this.state.data.get('pass') }</p>
  </div>
}