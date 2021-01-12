var fs = require('fs')
var readStream = fs.createReadStream('./data/file1.txt')  // 读取文件的 Stream
// 看这个文件一共有多少字符
var length = 0
readStream.on('data', function (chunk) {
    length += chunk.toString().length
})
readStream.on('end', function () {
    console.log(length)
})