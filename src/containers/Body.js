import React, { Component } from 'react';
import Content from '../components/Content';

export default class Body extends Component {
  render = () => <div style={styles}>
    <Content>
    </Content>
  </div>
}

const styles = {
  float: 'left',
  width: 'auto'
};