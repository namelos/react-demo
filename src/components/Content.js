import React, { Component } from 'react';

export default class Content extends Component {
  render = () => <div style={ styles }>
    { this.props.children }
  </div>
}

const styles = {
  width: '80%',
  margin: '50px auto'
};