import React, { Component } from 'react';
import { FlatButton } from 'material-ui';

export default class Button extends Component {
    render = () =>
      <FlatButton label={ this.props.children } style={ styles } />
}

const styles = {
  height: '50px',
  width: '150px',
  FontSize: '30px'
};