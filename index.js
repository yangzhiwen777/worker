const worker = new Worker('./worker.js');
console.log('首页创建工作线程', worker);
worker.postMessage({ action: 'computed' });
worker.onmessage = function (e) {
  console.log('主线程收到的消息', e.data);
};
