# JSX & ES6
JSX就是JavaScript内嵌XML语法,用标签展现DOM结构,用XML特有的Props描述非视觉相关信息.
```
React.render(
  <MyApp style={ styles } >
    <h1>Hello, again!</h1>
    { this.props.children }
  </MyApp>
)

styles = {
  backgroundColor: 'white',
  width: '100%'
}
```

## ES6
ES6加入很多新特性, 现在讨论几个在React中很常用的语法糖:
### 箭头函数(lambda)
```
(function (x) {
  return x + x
}).bind(this)
```
等价于
```
x => x + x
```
### 类(Class)
```
class MyApp extends Component {
  render = () =>
    <h1>This is MyApp</h1>
}
```
### 新声明关键字
* let
* const

### 解构与字面量简写
```
{ foo, bar } // 等价于 { foo: foo, bar: bar };
var { foo, bar } = { foo: 'aaa', bar: 'bbb' };
[x, y] = [y, x]
```
### ES6模块
```
import React, { Component, render } from 'react';
```