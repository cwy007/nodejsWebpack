const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('click', function(param1) {
  console.log('触发了点击', param1);
});

// emitter.once('click', function(param1) {
//   console.log('触发了点击', param1);
// });

emitter.emit('click', 'demo');
emitter.emit('click', 'demo');
