const fs = require('fs');

// fs.readFile('./README.md', 'utf8', (err, data) => {
//   if (err) {
//     console.log('读取失败', err);
//     return;
//   }
//   console.log('读取成功', data);
// })

/**
 * 文件不存在时，会新建文件
 * 会覆盖文件内容
 */
// fs.writeFile('./app.log', (new Date()).toString(), { encoding: 'utf8' }, (err) => {
//   if (err) {
//     console.log('写入失败', err);
//     return;
//   }
//   console.log('写入成功');
// });

fs.appendFile('./app.log', `${(new Date()).toString()}\n`, { encoding: 'utf8' }, (err) => {
  if (err) {
    console.log('写入失败', err);
    return;
  }
  console.log('写入成功');
});

// tail -f app.log // 实时查看日志

// fs.unlink('./data.txt', (err) => {
//   if (err) {
//     console.log('删除失败', err);
//     return;
//   }
//   console.log('删除成功');
// })

// fs.mkdir('aaa/bbb', { recursive: true }, (err) => {
//   if (err) {
//     console.log('创建失败', err);
//     return;
//   }
//   console.log('创建成功');
// });

// fs.readdir('.', (err, files) => {
//   if (err) {
//     console.log('遍历失败', err);
//     return;
//   }
//   console.log(files);
// })

fs.rmdir('./aaa', { recursive: true }, (err) => {
  if (err) {
    console.log('删除失败', err);
    return;
  }
  console.log('删除成功');
})
