# 样式
我们可以为组件设置内联样式:
```
<div style={ styles.div }>
  <p style={ styles.para }>This is a paragraph.</p>
</div>
const styles = {
  div: {
    backgroundColor: 'white',
    width: '100%',
    margin: '0 auto'
  },
  para: {
    fontSize: '20px',
  }
}
```
为组件设置CSS类需要使用className属性替代class:
```
<p className="para">This is another paragraph.</p>
// 渲染后标签为
<p class="para">This is another paragraph.</p>
```
因此也可以通过在HTML中引入css为class设置样式.
