const http = require("http");
const server1 = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
    return;
  }

  res.write("Hellow World2");
  res.end();
});

server1.listen(3000);
server1.on("connection", () => {
  console.log("new connection...");
});
