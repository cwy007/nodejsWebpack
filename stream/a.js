const fs = require('fs');
const zlib = require('zlib');

fs.createReadStream('./a.js')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('./a.js.gz'));

console.log('文件压缩完成');
