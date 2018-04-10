const fs = require('fs');

// 写入
fs.writeFile('a.html', '一些填入的文案', (err, data) => {
    console.log(err)
})

fs.readFile('a.html', (err, data) => {
    console.log()
})