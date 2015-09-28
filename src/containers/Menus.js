import React, { Component } from 'react';
import { Paper, List, ListItem, ListDivider, } from 'material-ui'
import Floater from '../components/Floater'

export default class Menus extends Component {
  render = () => <List style={ styles } >
    <ListItem primaryText="React" />
    <ListItem primaryText="工具" />
    <ListItem primaryText="React" />
    <ListDivider />
    <ListItem primaryText="中文" />
    <ListItem primaryText="中文" />
    <ListItem primaryText="中文" />
    <ListItem primaryText="中文" />
    <ListItem primaryText="中文" />
    <ListItem primaryText="中文" />
    <ListItem primaryText="中文" />
    <ListItem primaryText="中文" />
    <ListItem primaryText="中文" />
    <ListItem primaryText="中文" />
    <ListItem primaryText="中文" />
    <ListItem primaryText="中文" />
    <ListItem primaryText="中文" />
    <ListItem primaryText="中文" />
    <ListItem primaryText="中文" />
    <ListItem primaryText="中文" />
    <ListItem primaryText="中文" />
    <ListItem primaryText="中文" />
  </List>
}

const styles = {
  width: '20%',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: '#DDD',
  float: 'left'
};