React
===

https://github.com/namelos/react-demo

### 现代Web框架
+ 复杂逻辑 - 单项数据流，概念更简单
+ DOM交互 - 声明式组件，DOM操作交由框架自动完成
+ 性能 - 不可变数据结构比对，精确刷新
+ 测试 - 鼓励纯函数，更少BUG，更可靠
+ 开发 - XML语法，分离关注点，容易阅读
+ 实践 - 可复用模块化组件，更好协作与重用

### 组件化开发
#### ES5
```javascript
var Greeting = React.createClass({
  render: function() {
    return (
      React.createElement('h1', null, 'Hello, world!')
    )
  }
})
```
#### ES6 + JSX
```javascript
class Greeting extends Component {
  render = () => <h1>
    Hello world!
  </h1>
}
```
### 生态
+ React:
  - React - React本体
  - React-dom - React渲染库
+ 工具流:
  - Gulp - 自动化
  - Webpack - 打包
  - Babel - 预处理器
+ 相关库: 
  - Immutable - 不可变数据结构
  - React-router - 前端路由
+ 数据流:
  - Flux
  - Reflux
  - Redux