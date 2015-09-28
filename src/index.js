import React, { Component, render } from 'react';
import { Paper, Slider, Tabs, Tab, FlatButton } from 'material-ui';
import routes from './routes';
import reset from './utils/normalize';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import App from './containers/App';
//import $ from 'jquery';
//
//import marked from 'marked';
//
//class MD extends Component {
//  constructor(props) {
//    super(props);
//    this.state = { data: '' }
//  }
//  componentDidMount = () =>
//    $.ajax({
//      url: this.props.url,
//      dataType: 'text',
//      success: data => {console.log(data); return this.setState({ data })},
//      error: (xhr, status, err) => console.err(this.props.url, status, err.toString())
//    });
//  render = () => <div>
//    { marked(this.state.data) }
//  </div>
//}

render(
    routes
    ,
    document.getElementById('root')
);

//$($.ajax({
//  url: 'http://localhost:3000/README.md',
//  type: 'get',
//  dataType: 'text',
//  success: function(data) {
//    console.log(data);
//  },
//  error: function(xhr, status, err) {
//    console.error(err.toString());
//  }
//}));
