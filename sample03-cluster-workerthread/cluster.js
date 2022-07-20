const cluster = require("cluster");
const crypto = require("crypto");
const express = require("express");
const app = express();
const start = performance.now();

process.env.UV_THREADPOOL_SIZE = 8;

function dowork(duration) {
  const start = Date.now();
  while (Date.now() - start < duration) {}
}

if (cluster.isMaster) {
  console.log(cluster.isMaster);
  cluster.fork();
}

if (!cluster.isMaster) {
  app.get("/", (_, res) => {
    dowork(5000);
    const end = performance.now();
    res.send(`Hello World:${end - start}`);
  });

  app.get("/fast", (_, res) => {
    const end = performance.now();
    res.send(`Hello World:${end - start}`);
  });

  app.get("/pbdf2", async (_, res) => {
    crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
      const end = performance.now();
      res.send(`Hello World:${end - start}`);
    });
  });

  app.listen(3000);
}
