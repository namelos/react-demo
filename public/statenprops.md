# 状态与属性
* state用来描述内部暂时的状态, 而props则由上级定义或返回的JSX直接定义的.
* 尽量避免使用state, 特别是在深层子组件中.
* 小应用可以建立无实际DOM的抽象父组件, 为其建立state, 传递给子组件作为它们的props.
* 大型应用可以用单独的lib建立专门的state store, 其余组件全部使用props传递属性(flux实现).
```
// 父组件
<Parent>
    <Children greet={ 'Hello' } />
</Parent>

// 子组件
<Children>{ this.props.greet }</Children>
```
React鼓励单向数据流, 实现双向绑定非常容易, 但是不建议使用.