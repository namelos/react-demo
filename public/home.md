# React
### namelos.io
组件化开发:
```
class MyApp extends Component {
  render = () =>
    <h1>Hello, world!</h1>
}
```
### Angular - MVVM
* 优点: 代码量少, 抽象度高, 框架内置对象实用, 适合集成测试
* 缺点: 扩展能力差, 代码Hack多, DSL过多

### React + Flux实现
* 优点: 灵活, 扩展能力强, 高性能, 模块化, 低耦合, 更JS
* 缺点: 模块粒度过细, 工具链较复杂, 初期轮子少

### 生态:
* React - 组件化虚拟DOM库(仅仅是View层)
* Immutable.js - 不可变数据结构
* Flux - 单向数据流
    * Flux (Facebook)
    * Reflux
    * Flummox (Yahoo)
    * Redux
* React router - 路由
* Radium - 内联样式

### 虚拟DOM
* 实现一套虚拟DOM, 可以跨平台运行.
* 虚拟DOM依靠Immutable实现进行diff, 进而进行精确刷新, 解决了DOM无限遍历这个最大的性能瓶颈.
* 因为虚拟DOM可以在任何实现了虚拟DOM的平台运行, 还可以进行后端渲染来获得SEO能力, 可以前后端同构渲染同时获得SPA和SEO的优点.