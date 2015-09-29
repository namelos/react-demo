# 工作流
现代框架需要大量插件, 因此需要有非常好用的模块管理功能. 依托Node.js, 前端现在拥有世界上最好的包管理系统, 以及各种自动化工具.
### Node.js & npm:
Node.js是一个本地环境的高性能JavaScript解释器. npm为Node.js自带的包管理系统.
```
node xxx.js // 在命令行执行你的脚本
npm install xxx // 在命令行使用npm安装所需模块
var $ = require('jquery'); // 在js文件中引入大家都很熟悉的jQuery
```
### Browserify:
虽然脚本可以正常运行, 但是依然无法打包成一个文件塞进前端, 这时候需要打包工具Browserify:
```
npm install -g browserify // 在全局安装browserify打包工具
browserify main.js > bundle.js // 以main.js为主入口 打包输出成bundle.js可以直接被html文件引用
browserify main.js --debug | exorcist bundle.js.map > bundle.js
// 打包同时可以获得一份sourcemap, 可以在浏览器中调试打包或者压缩前的代码, 更易读.
```
### Gulp:
反复执行命令打包非常累人, 因此我们需要让电脑做这种无聊的事(DRY: Don't Repeat Yourself).

Gulp是一个自动化工作流工具, 有成千上万的插件, 足以替你做大多数工作:
```
// gulpfile.js
var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    
gulp.task('browserify', function() {
  gulp.src('app/main.js')
      .pipe(browserify())
      .pipe(gulp.dest('dist/js'))
});

gulp.task('watch', function() {
  gulp.watch('app/**/*.js', ['browserify']);
});

gulp.task('default', ['watch']);
```

### Webpack & babel
Webpack是新一代打包工具, 它兼有一定自动化功能, babel则是ES6与JSX的编译库, 同时有gulp与webpack插件.

(facebook曾经维护一个JSXTransformer, 由于babel很受欢迎, 于是废弃了)
```
// Webpack.config.js
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loader: {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }
  }
};
```