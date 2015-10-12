ES6
===
#### 声明
```js
let i = 0; // 块级变量
const PI = 3.14; // 常量
```

#### 解构
```js
var [a, b, c] = [1, 2, 3];
[a, b] = [b, a];

{ foo, bar }
// 等价于
{ foo: foo, bar: bar }
```

#### 模块
```js
const React = require('react');
const Component = React.Component; // CommonJS

import React, { Component, render } from 'react'; // ES6
```

#### 函数
```js
// 箭头函数
x => x + x
// 等价于
function(x) {
  return x + x;
}

// 参数默认值
function(x = 1) {
  return x + 1;
} // undefined触发, null不触发
```
