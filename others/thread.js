const crypt = require("crypto");

// 8コア
// pbkdf2：400ms

// 2スレッド:400*14/2 = 2800ms
// process.env.UV_THREADPOOL_SIZE = 2;

// 8スレッド：400*14/8 = 700ms
process.env.UV_THREADPOOL_SIZE = 8;

// 14スレッド:400*14/8 = 700ms
// process.env.UV_THREADPOOL_SIZE = 14;

const start = Date.now();
crypt.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log(1, Date.now() - start);
});

crypt.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log(2, Date.now() - start);
});

crypt.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log(3, Date.now() - start);
});

crypt.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log(4, Date.now() - start);
});

crypt.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log(5, Date.now() - start);
});

crypt.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log(6, Date.now() - start);
});

crypt.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log(7, Date.now() - start);
});

crypt.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log(8, Date.now() - start);
});

crypt.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log(9, Date.now() - start);
});

crypt.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log(10, Date.now() - start);
});

crypt.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log(11, Date.now() - start);
});

crypt.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log(12, Date.now() - start);
});

crypt.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log(13, Date.now() - start);
});

crypt.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log(14, Date.now() - start);
});
