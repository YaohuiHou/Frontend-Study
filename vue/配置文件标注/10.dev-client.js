### dev-client.js主要定义了热更新

```
require('eventsource-polyfill') // 引入eventsource-polyfill模块，polyfill是用来填平旧浏览器一些事件支持上的缺陷，俗称刮腻子
/*
  noInfo：禁用信息控制台日志
  reload：当webpack卡住时重新加载整个页面
*/
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')  // 引入webpack-hot-middleware模块,该模块是服务器支持热更新

hotClient.subscribe(function (event) {  // 暂且理解为订阅事件
  if (event.action === 'reload') {  // 当 event.action === 'reload' 时执行页面刷新
    window.location.reload()
  }
})
```
