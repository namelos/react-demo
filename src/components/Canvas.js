import React, { Component } from 'react';

export default class Canvas extends Component {
  render = () => <canvas style={ styles }>
  </canvas>
}

const styles = {
  height: '300px',
  width: '100%',
  position: 'absolute',
};