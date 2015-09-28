import React, { Component } from 'react';
import Menus from './Menus';
import MD from '../components/MD';

export default class App extends Component {
  render = () => <div>
    <div style={ styles.menus }>
      <Menus/>
    </div>
    <div style={ styles.content }>
      { /* <MD url='http://localhost:3000/code.md' /> */ }
      { this.props.children }
    </div>
  </div>
}

const styles = {
  menus: {
    width: '20%',
    height: '1000px',
    float: 'left'
  },
  content: {
    width: '80%',
    height: '1000px',
    float: 'right'
  }
};
