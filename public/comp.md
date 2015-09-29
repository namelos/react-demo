# 组件
### ES5版本:
```
var React = require('react');

var Counter = React.createClass({
  getInitialState: function() {
    return this.state = { counter: 0 }
  },
  handleClick: function() {
    this.setState({ counter: this.state.counter + 1 })
  },
  render: function() {
    return ( <div>
      <h2>{ this.state.counter }</h2>
      <button onClick={ this.handleClick }>Increment</button>
    </div>)
  }
});
```
### ES6版本
```
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state= { counter: 0 };
  }

  handleClick = () =>
    this.setState({ counter: this.state.counter + 1 });

  render = () => <div>
    <h2>{ this.state.counter }</h2>
    <button onClick={ this.handleClick }>Increment</button>
  </div>
}
```