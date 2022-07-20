const express = require("express");
const router = express.Router();

const { Worker, isMainThread } = require("node:worker_threads");

router.get("/", async (_, res) => {
  console.log("main thread:", isMainThread);
  const result = await getWorkerDate();
  res.status(200).send(`${result}`);
});

function getWorkerDate() {
  return new Promise((res) => {
    const worker = new Worker("./worker", {
      workerData: "workerroute.js",
    });
    worker.on("message", (message) => {
      console.log("get from worker:", message);
      res(message);
    });
  });
}

module.exports = router;
