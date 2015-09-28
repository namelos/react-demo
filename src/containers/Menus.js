import React, { Component } from 'react';
import { Paper, List, ListItem, ListDivider, } from 'material-ui'
import Item from '../components/Item';
import { Link } from 'react-router';

export default class Menus extends Component {
  render = () => <List style={ styles } >
    <Link to="/home"><ListItem primaryText="简介" /></Link>
    <Link to="/jsx"><ListItem primaryText="JSX & ES6" /></Link>
    <Link to="/home"><ListItem primaryText="工具" /></Link>
    <ListDivider />
    <Link to="/comp"><ListItem primaryText="组件" /></Link>

  </List>
}

const styles = {
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: '#DDD',
};