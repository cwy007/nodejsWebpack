// 头像链接
// https://www.ddhigh.com/images/logo.svg

const https = require('https');
const fs = require('fs');

const req = https.request('https://static.ddhigh.com/blog/2019-09-18-094336.jpg', (response) => {
  // response 是一个读取流
  console.log('相应状态码', response.statusCode);
  response.pipe(fs.createWriteStream('logo.jpg')); // 通过管道流保存图片
});

req.end(); // 发送请求
