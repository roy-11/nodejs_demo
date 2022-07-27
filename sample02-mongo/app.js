const express = require("express");
const logger = require("./middlewares/logger");
const helmet = require("helmet");
const config = require("config");
const error = require("debug")("app:error");
const log = require("debug")("app:log");
const genres = require("./routes/genres");
const customers = require("./routes/customers");
const app = express();
const mongoose = require("mongoose");

// connect mongodb
try {
  connectMongoDB();
} catch (err) {
  error(err);
}

async function connectMongoDB() {
  try {
    const result = await mongoose.connect("mongodb://localhost/vildy");
    log(result && "Connected to MongoDB...");
  } catch (err) {
    error(err);
  }
}

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger(app));
app.use(helmet());

// config
log("Name:", config.name);
log("URL:", config.url);
log("Debug Level:", config.debug);
log("Enviroment:", config.env);

// routes
app.get("/", (_req, res) => res.send("Hello World"));
app.use("/api/genres", genres);
app.use("/api/customers", customers);

app.listen(config.port, () => {
  log("PORT:", config.port || 3000);
});
