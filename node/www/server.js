const http = require('http');
const fs = require('fs');
const querystring = require('querystring'); // 解析post
const urllib = require('url'); // 解析get

const server = http.createServer(function(req, res) {
    console.log('进来咯。。')
        // get
        // 解析url
    var obj = urllib.parse(req.url, true);

    const url = obj.pathname;
    const GET = obj.query;

    // post
    var str = '';
    req.on('data', function(data) {
        str += data
    });

    req.on('end', function() {
        var POST = querystring.parse(str)

        console.log(url, GET, POST)


        // 读取文件
        var file_name = '.' + url
        fs.readFile(file_name, function(err, data) {
            if (err) {
                res.write('404')
            } else {
                res.write(data)
            }
            res.end();
        })
    });

})

server.listen(8080)