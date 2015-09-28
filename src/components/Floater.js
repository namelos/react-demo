import React, { Component } from 'react';
import { Paper } from 'material-ui'

export default class Floater extends Component {
  constructor(props) {
    super(props);
    this.state = { zDepth: 0 };
  }
  mouseEnter = () => this.setState({ zDepth: 2 });
  mouseOut = () => this.setState({ zDepth: 0 });
  render = () => <Paper
      style={ this.props.style }
      zDepth={ this.state.zDepth }
      onMouseEnter={ this.mouseEnter }
      onMouseOut={ this.mouseOut }>
    { this.props.children }
  </Paper>
}

