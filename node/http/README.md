# HTTP服务

为了支持各种可能的 HTTP 应用，Node.js 的 HTTP API 是非常底层的。 它只涉及流处理与消息解析。 它把一个消息解析成消息头和消息主体，但不解析具体的消息头或消息主体。


- 引入模块 require('http')
- 创建服务 createServer(function(req,res){})
- 监听服务 listen(端口号)
- 写入 write()
- 停止 end()