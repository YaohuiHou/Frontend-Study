const http = require('http')

// 创建一个服务
const server = http.createServer((req, res) => {
    // req 请求   res 响应
    res.write('写入');
    res.end()
})

// 监听
// 端口

server.listen(8080)