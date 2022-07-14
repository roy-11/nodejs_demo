const morgan = require("morgan");
const debug = require("debug")("development");

module.exports = (app) => {
  app.use(morgan("tiny"));
  return (_req, _res, next) => {
    debug("logging debug test message...");
    next();
  };
};
