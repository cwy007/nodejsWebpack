const fs = require('fs');

let data = '';
const readStream = fs.createReadStream('./a.js', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./b.js', { encoding: 'utf8' });

readStream.on('data', (chunk) => {
  writeStream.write(chunk);
});

readStream.on('end', () => {
  writeStream.end();
  console.log('读取完成');
});

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
