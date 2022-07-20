const crypto = require("crypto");
const express = require("express");
const app = express();
const workerroute = require("./workerroute");
const start = performance.now();

function dowork(duration) {
  const start = Date.now();
  while (Date.now() - start < duration) {}
}

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

app.use("/worker", workerroute);

app.listen(3000);
