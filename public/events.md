事件
===
计数器事例：
```js
class Counter extends Component {
  constructor() {
    super();
    this.state = { counter: 0 }
  }
  handleClick = e =>
    this.setState({ counter: this.state.counter + 1 })
  render = () => <h1 onClick={ this.handleClick }>
    { this.state.counter }
  </h1>
}
```
ES5声明内部自动绑定this，不需要手动绑定.
ES6则需要在constructor中声明，或声明方法时绑定this:
```
constructor() {
  super();
  this.handleClick = this.handleClick.bind(this);
}
// 或者
handleClick = function {
  this.setState({ counter: this.state.counter + 1 })
}.bind(this)
```

| 鼠标 |
|-|
| onClick       | onMouseEnter | onMouseOver | onDragEnd   | onDragOver
| onContextMenu | onMouseLeave | onMouseUp   | onDragEnter | onDragStart
| onDoubleClick | onMouseMove  | onDrop      | onDragExit  ||
| onMouseDown   | onMouseOut   | onDrag      | onDragLeave |||

| 触摸          | 键盘       | 剪切     | 表单     | 其它     |
| -------------|------------| ------- | ---------|----------|
| onTouchCancel| onKeyDown  | onCopy  | onChange | onScroll |
| onTouchEnd   | onKeyPress | onCut   | onInput  | onFocus  |
| onTouchMove  | onKeyUp    | onPaste | onSubmit | onBlur   |
| onTouchStart |            |         |          | onWheel  |
