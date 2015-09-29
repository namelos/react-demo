import React, { Component } from 'react';
import { Paper, List, ListItem, ListDivider, } from 'material-ui'
import Item from '../components/Item';
import { Link } from 'react-router';

export default class Menus extends Component {
  render = () => <List style={ styles } >
    <Link to="/home"><ListItem primaryText="React" /></Link>
    <Link to="/jsx"><ListItem primaryText="JSX & ES6" /></Link>
    <Link to="/workflow"><ListItem primaryText="工作流" /></Link>
    <ListDivider />
    <Link to="/comp"><ListItem primaryText="组件" /></Link>
    <Link to="/styles"><ListItem primaryText="样式" /></Link>
    <ListDivider />
    <Link to="/toplevel"><ListItem primaryText="顶层API" /></Link>
    <Link to="/complevel"><ListItem primaryText="组件API" /></Link>
    <Link to="/lifecycle"><ListItem primaryText="生命周期" /></Link>
  </List>
}

const styles = {
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: '#DDD'
};