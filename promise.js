const fs = require('fs');

function readFileAsync(path) {
  return new Promise(function(resolve, reject) {
    fs.readFile(path, function(err, data) {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
}

// readFileAsync('./package.json')
// .then(function(data) {
//   console.log('读取package.json成功', data);
//   return readFileAsync('./package2.json');
// })
// .then(function(data2) {
//   console.log('读取package2.json成功', data2);
// })
// .catch(function(err) {
//   console.log('读取失败', err);
// })

async function readFiles() {
  try {
    const data1 = await readFileAsync('./package.json');
    const data2 = await readFileAsync('./package2.json');
    console.log('文件1内容', data1);
    console.log('文件2内容', data2);
  } catch (e) {
    console.error('读取失败', e);
  }
}

// readFiles();

async function doSomething(a, b) {
  return a + b;
}

const doSomething2 = async (a, b) => {
  return a + b;
}

class Demo {
  async test(a, b) {
    return a + b;
  }
}

const data = doSomething(1, 2);
console.log('data', data);

doSomething(1, 2).then(function(result) {
  console.log(result);
});
