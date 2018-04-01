# express + node + mysql

基于nodeJs，使用express生成器搭建环境，关联MySQL数据库增删改表内容

## express应用生成

> 官方文档：http://www.expressjs.com.cn/starter/generator.html

按照官网步骤直接安装

```
$ npm install express-generator -g

$ express myapp

$ cd myapp 
$ npm install

$ npm start
```

然后在浏览器中打开 http://localhost:3000/ 网址就可以看到这个应用了。

文件结构如下：

```
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade

7 directories, 9 files
```

## MySQL配置

- 装一个MySQL，文档百度很全；创建一个表，打开刚刚新建的Connection并新一个数据库并命名为 nodedb
- 接下来我们新建一个 Table 并命名为 User
- 新建表内容如下：
```
uid INT(11) 用户id
userName VARCHAR(25) 用户姓名
```
这时MySQL表建好了

## MySQL模块

安装mysql

 ```
 $ npm install mysql
 ```
接着我们向工程中添加一个 db 目录 用于存放MySQL配置信息,并在 db 目录总新建一个 DBConfig.js 文件并添加如下内容

```
module.exports =
 {  
    mysql: {   
        host: 'localhost',     
        user: 'root',   
        password: '你的数据库Coonection密码',  
        database:'nodedb'
    }
 };
```
紧接着我们继续在 db目录中添加 usersql.js(usersql.js 的主要作用是提供增删改查sql语句。) 并键入如下内容

```
var UserSQL = {
    insert: 'INSERT INTO User(uid,userName) VALUES(?,?)',
    queryAll: 'SELECT * FROM User',
    getUserById: 'SELECT * FROM User WHERE uid = ? ',
};
module.exports = UserSQL;
```
###### 紧接着我们还需要在 routes 目录中添加一个users.js 向外暴露我们操作 User 的API接口。
为了添加测试数据暂时向 users.js 中添加一个 addUser 接口 内容如下

```

var express = require('express');
var router = express.Router();
// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../db/DBConfig');
var userSQL = require('../db/Usersql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);
// 响应一个JSON数据
var responseJSON = function(res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '-200',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};
// 添加用户
router.get('/addUser', function(req, res, next) {
    // 从连接池获取连接 
    pool.getConnection(function(err, connection) {
        // 获取前台页面传过来的参数  
        var param = req.query || req.params;
        // 建立连接 增加一个用户信息 
        connection.query(userSQL.insert, [param.uid, param.uname], function(err, result) {
            if (result) {
                result = {
                    code: 200,
                    msg: '增加成功'
                };
            }

            // 以json形式，把操作结果返回给前台页面     
            responseJSON(res, result);

            // 释放连接  
            connection.release();

        });
    });
});
module.exports = router;
```

访问 http://localhost:8888/users/addUser?uid=4&name=helloMySQL








