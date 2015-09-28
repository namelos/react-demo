import React, { Component } from 'react';
import { Paper } from 'material-ui';
import Button from './Button';

export default class HeadBar extends Component {
    render = () =>
      <Paper zDepth={ 1 } style={ styles } >
        { this.props.children }
      </Paper>
}

const styles = {
  height: '50px',
  width: '100%',
};