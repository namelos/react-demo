import React, { Component } from 'react';
import $ from 'jquery';
import marked from 'marked';

export default class MD extends Component {
  constructor(props) {
    super(props);
    this.state = { data: '' }
  }
  componentDidMount = () =>
      $.ajax({
        url: this.props.url,
        dataType: 'text',
        success: data => this.setState({ data }),
        error: (xhr, status, err) => console.err(this.props.url, status, err.toString())
      });
  createMD = () =>
      ({ __html: marked(this.state.data) });
  render = () =>
      <article dangerouslySetInnerHTML={ this.createMD() } className="markdown-body" />
}