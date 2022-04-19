const express = require('express');

const app = express();

// 路由
// 字符串
// 字符串模式
// 正则表达式
app.get('/', (req, resp) => {
  resp.json(req.headers);
});

// 路由参数
// curl http://localhost:8080/users/1/timelines/2
// {"userId":"1","timelineId":"2"}
app.get('/users/:userId/timelines/:timelineId', (req, resp) => (
  resp.json(req.params)
));

app.listen(8080, () => {
  console.log('listen on 8080');
});
