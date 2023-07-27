// * path
const path = require("path");
console.log(__dirname);
console.log(__filename);
console.log(process.cwd());

console.log(path.join("./aaaa/aaaa.js"));
console.log(path.join("../aaaa/aaaa.js"));
console.log(path.join(__dirname, "./aaaa/aaaa.js"));
console.log(path.join(__dirname, "../aaaa/aaaa.js"));
console.log(path.resolve("./aaaa/aaaa.js"));
console.log(path.resolve("../aaaa/aaaa.js"));
console.log(path.resolve(__dirname, "./aaaa/aaaa.js"));
console.log(path.resolve(__dirname, "../aaaa/aaaa.js"));
