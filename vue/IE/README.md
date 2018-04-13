# vue - IE

vue兼容ie9+，在开发ie过程中兼容做的好好的，可以说吃着火锅唱着歌，艹蛋的麻匪就把你截了！在ie下打开页面没有任何数据请求，查看控制台又发现突然之间好了，关掉刷新又奇葩的没有数据。心中一万个曹尼玛奔腾着。。。

#### 排查

- 铁定百度一下你就知道

百度给你说：ie下，console只有在bug模式下才会创建，生产模式下并不认识这个玩意儿，就报错，直接阻断后面的。

- 全局去掉console

自己的代码在上线前所有console都已经干掉了，可是最后打包后的vendor.js是人家vue自己生成的，在build文件中直接删掉麻烦还可能删错，所以只能在代码中关掉vue自己的console

```
/* 
   webpack.config.js 的 plugins 里面加上
   drop_debugger: true,
   drop_console: true
*/

new webpack.optimize.UglifyJsPlugin({
  compress:{
    warnings: false,
    drop_debugger: true,
    drop_console: true
  }
})
```
