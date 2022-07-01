const fs = require("fs");

const files = fs.readdirSync("./");
console.log(files);
fs.readdir("./", (err, files) => {
  console.log(files);
  if (err) console.error(err);
});
