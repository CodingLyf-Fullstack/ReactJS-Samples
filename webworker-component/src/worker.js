// worker.js
self.onmessage = (event) => {
    const num = event.data;
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    console.log('worker')
    self.postMessage(sum); // Send result back to main thread
  };
  