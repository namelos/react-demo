# 顶层API
## React
React是整个lib的入口
## createClass:
组件类工厂, 在ES6中可以直接建立Class继承React.Component
```
React.createClass({
  // methods
})
```
## createElement
当不用JSX时使用, 用于创建React虚拟DOM对象
```
React.createElement('div', null, 'Hello, world!')
```
## React.createFactory & React.renderToString
工厂函数, 可以生成指定元素, 还可以生成字符串HTML用于服务端渲染.
```
React.renderToString(React.Factory(MyApp));
```
## React.render
最常用API,用来渲染虚拟DOM组件
```
React.render(<MyApp />, el)
```
## React.PropTypes
React内置类型签名, 用于开发可复用组件
## React.Children
用于处理`this.props.children`子节点
```
React.Children.map
React.Children.forEach
React.Children.count
React.Children.only
```