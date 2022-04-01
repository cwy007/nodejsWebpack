const http = require('http');

const server = http.createServer((req, resp) => {
  resp.end(JSON.stringify(req.headers));
});

server.listen(8080, () => console.log('listen on 8080'));
