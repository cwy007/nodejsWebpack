const express = require('express');

const app = express();

app.get('/', (req, resp) => {
  resp.json(req.headers);
});

app.listen(8080, () => {
  console.log('listen on 8080');
});
