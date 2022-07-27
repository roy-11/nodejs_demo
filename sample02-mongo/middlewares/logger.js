const morgan = require("morgan");
const log = require("debug")("app:log");

module.exports = (app) => {
  app.use(morgan("tiny"));
  return (_req, _res, next) => {
    log("logging debug test message...");
    next();
  };
};
