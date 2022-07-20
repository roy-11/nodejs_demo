const { workerData, isMainThread, parentPort } = require("worker_threads");

console.log("form:", workerData);
console.log("main thread:", isMainThread);

let count = 0;
let start = Date.now();
let duration = 5000;
while (Date.now() - start < duration) {
  count++;
}

parentPort.postMessage(count);
