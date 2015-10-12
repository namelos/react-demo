属性与状态
===
### 属性
属性是父级传递下来的JavaScript对象，组件本身不可更改，组件一般被动地渲染属性
```js
<Hello name={ variable } />
// splats
const props = {
  name: 'Fred',
  age: 23
}
<Hello {...props} />
```
### 状态
+ getInitialState
  - 初始化状态（也是对象）
+ setState
  - 设定状态（新状态，会调用diff算法决定是否重新渲染）
