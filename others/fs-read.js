const https = require("https");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const start = Date.now();

// process.env.UV_THREADPOOL_SIZE = 4; // 記載は先でも準備でfs がスレッド待ちが発生する
process.env.UV_THREADPOOL_SIZE = 5;

function doRequest(params) {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log("http", Date.now() - start);
      });
    })
    .end();
}

fs.readFile(path.join(__dirname, "./thread.js"), {}, () => {
  console.log("fs", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("crypto", 1, Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("crypto", 2, Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("crypto", 3, Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("crypto", 4, Date.now() - start);
});

doRequest();
