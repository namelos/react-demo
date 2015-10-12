JSX
===
+ JSX在JavaScript中内嵌类似XML语法的表达式
+ JSX仅仅是语法糖，普通JavaScript一样可以编写React代码
+ JSX更清晰，语义化更好
```js
// JSX
<h1 className="title" id="first" name={ name }>Hello</h1>
// 等价于
React.createElement(
  "h1", // 元素名
  { className: "title", id: "first", name: name }, // 属性
  "Hello, { this.props.name }" // 子节点
);
```
+ 自定义组件首字母大写 `<Comment>This tutorial is Great!</Comment>`
+ 无内容文本可以自闭合 `<App />`
+ 只能使用表达式，不能使用语句如`return`，`if`，`switch`等
+ 使用`className`与`htmlFor`代替`class`与`for`属性
+ 支持嵌套

#### 特殊属性
+ dangerouslySetInnerHTML
  ```js
  <div dangerouslySetInnerHTML={ Marked(foo.md) }></div>
  ```
+ ref
  ```js
  // 定义Ref
  <p ref="paragraph">This is a paragraph.</p>
  // 组建内使用Ref引用
  const content = this.refs.paragraph.text;
  ```
+ key
  ```js
  <ul>
    <li key="1">First</li>
    <li key="2">Second</li>
    <li key="3">Third</li>
  </ul>
  ```
