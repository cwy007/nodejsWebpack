const fs = require('fs');

fs.readFile('./package.json', function(err, data) {
  if (err) {
    console.log('读取出错', err);
    return;
  }
  console.log(data);
})

// <Buffer 7b 0a 20 20 22 6e 61 6d 65 22 3a 20 22 6e 6f 64 65 6a 73 77 65 62 70 61 63 6b 22 2c 0a 20 20 22 76 65 72 73 69 6f 6e 22 3a 20 22 31 2e 30 2e 30 22 2c ... 213 more bytes>
