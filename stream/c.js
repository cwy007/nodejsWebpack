const fs = require('fs');

let data = '';
const readStream = fs.createReadStream('./a.js', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./c.js', { encoding: 'utf8' }); // fs.createWriteStream 会创建对应的文件

readStream.pipe(writeStream); // 会覆盖原有文件的内容

writeStream.on('finish', () => {
  console.log('写入完成');
});

readStream.on('error', (err) => {
  console.error('读取错误', err);
});

writeStream.on('error', (err) => {
  console.log('写入错误');
});

console.log('执行完毕');
