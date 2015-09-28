import React, { Component } from 'react';
import HeadBar from '../components/HeadBar';
import Button from '../components/Button';
import { Link } from 'react-router';

export default class Head extends Component {
  render = () => <div>
    <HeadBar>
      <Button>React</Button>
    </HeadBar>
  </div>
}
