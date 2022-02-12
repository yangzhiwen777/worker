
console.log('我是工作线程,我要执行了');

self.addEventListener('message', function (e) {
  console.log('工作线程收到的消息', e.data)
  console.log('我需要做一些事情')
  
  self.postMessage(e.data);
}, false);
