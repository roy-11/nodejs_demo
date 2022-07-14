const express = require("express");
const logger = require("./middlewares/logger");
const helmet = require("helmet");
const config = require("config");
const courses = require("./routes/courses");
const posts = require("./routes/posts");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger(app));
app.use(helmet());

// config
console.log(config.name);
console.log(config.url);
console.log(config.user);
console.log(config.debug);

// routes
app.get("/", (_req, res) => res.send("Hello World"));
app.use("/api/courses", courses);
app.use("/api/posts", posts);

app.listen(config.port, () => {
  console.log("PORT:", config.port || 3000);
});
