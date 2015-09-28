import React, { Component } from 'react';
import HeadBar from '../components/HeadBar';
import Button from '../components/Button';
import { Link } from 'react-router';

export default class Head extends Component {
  render = () => <HeadBar>
    <Button><Link to="/home">home</Link></Button>
    <Button><Link to="/redux">Redux</Link></Button>
    <Button><Link to="/routing">Routing</Link></Button>
    <Button>Test</Button>
    <Button>Test</Button>
    <Button>Test</Button>
  </HeadBar>
}