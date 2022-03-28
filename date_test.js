const date = require('./date');

const now = parseInt(Date.now() / 1000, 10);

console.log(date.formatTime(now - 60));
console.log(date.formatTime(now - 600));
console.log(date.formatTime(now - 5400));
console.log(date.formatTime(now - 3600 * 23));
console.log(date.formatTime(now - 3600 * 24));
console.log(date.formatTime(now - 3600 * 24 * 3));

// 刚刚
// 1小时内
// 3小时内
// 今天
// 1天前
// Fri Mar 25 2022 23:47:14 GMT+0800 (China Standard Time)
