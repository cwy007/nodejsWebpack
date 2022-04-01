const fs = require('fs');

let data = '';
const stream = fs.createReadStream('./a.js', { encoding: 'utf8' });

stream.on('data', (chunk) => {
  data += chunk;
});

stream.on('end', () => {
  console.log(data);
});

stream.on('error', (err) => {
  console.error('读取错误', err);
});

console.log('执行完毕');
