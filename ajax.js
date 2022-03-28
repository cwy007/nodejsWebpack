function ajaxGet(url, timeout) {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest(); // 在浏览器中运行
    xhr.open('GET', url, true);
    xhr.timeout = timeout;

    xhr.onload = function() {
      resolve(xhr.responseText);
    };
    xhr.onerror = function(e) {
      reject(new Error('请求失败'));
    };
    xhr.ontimeout = function() {
      reject(new Error('timeout'));
    };

    xhr.send(null);
  });
}

async function getData() {
  try {
    const data = await ajaxGet('https://www.baidu.com', 1000);
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}

getData();
