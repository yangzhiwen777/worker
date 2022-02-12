
console.log('我是工作线程,我要执行了');

self.addEventListener('message', function (e) {
  self.postMessage('You said: ' + e.data);
}, false);
