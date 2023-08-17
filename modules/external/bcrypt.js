const bcrypt = require("bcrypt");

const salt = bcrypt.genSaltSync(10);
const hashed = bcrypt.hashSync("passward", salt);
console.log("salt:", salt);
console.log("hashed:", hashed);
