import React, { Component } from 'react';
import { Paper, List, ListItem, ListDivider, } from 'material-ui'
import Item from '../components/Item';
import { Link } from 'react-router';

export default class Menus extends Component {
  render = () => <List style={ styles } >
    <Link to="/home"><ListItem primaryText="React" /></Link>
    <ListDivider />
    <Link to="/es6"><ListItem primaryText="ES6" /></Link>
    <Link to="/jsx"><ListItem primaryText="JSX" /></Link>
    <ListDivider />
    <Link to="/lifecycle"><ListItem primaryText="生命周期" /></Link>
    <Link to="/events"><ListItem primaryText="事件" /></Link>
    <Link to="/stateandprops"><ListItem primaryText="属性与状态" /></Link>
    <ListDivider />
    <Link to="/playground"><ListItem primaryText="组件" /></Link>
  </List>
}

const styles = {
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: '#DDD'
};