import React, { Component } from 'react';
import { ListItem } from 'material-ui';

export default class Item extends Component {
  render = () =>
    <ListItem primaryText={ this.props.children } />
}