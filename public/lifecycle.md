组件的生命周期
===
```
export default class Methods extends Component {
  static defaultProps = { number: 0 };

  state = { counter: 0 };

  handleClick = () =>
    this.setState({ counter: this.state.counter + 1 });

  render = () => <Content>
    <h1 onClick={ this.handleClick }>
      State:{ this.state.counter },
      Props:{ this.props.number }
    </h1>
  </Content>
}
```
### 生命周期是组件类方法
1. 初始化
  1. getDefaultProps
    * 只调用一次，所有实例共享（静态）
  - getInitialState
    * 为实例定义的状态
  - componentWillMount
    * 第一次render前触发
  - render
    * 可以访问this.props与this.state
    * 只允许返回一个JSX元素（可嵌套）
  - componentDidMount
    * render加载后触发，可以修改DOM节点
+ 运行中
  1. componentWillReceiveProps
    * 父组件修改属性时触发，可以修改属性和状态
  - shouldComponentUpdate
    * 返回false会阻止更新
  - componentWillUpdate
    * 不能修改属性和状态
  - render
    * 同上
  - componentDidUpdate
    * 同componentDidMount
+ 销毁
  1. componentWillUnmount
    * 销毁前调用

ES6:
```js
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
```
ES5:
```
var MD = React.createClass({
  getInitialState: function() {
    return { data: '' }
  }
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'text',
      success: data => this.setState({ data }),
      error: (xhr, status, err) => console.err(this.props.url, status, err.toString())
    })
  };
  createMD: function() {
    return ({ __html: marked(this.state.data) })
  };
  render: function {
    return (
      <article dangerouslySetInnerHTML={ this.createMD() } className="markdown-body" />
    )
  }
})
```