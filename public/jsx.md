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
