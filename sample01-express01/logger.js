const morgan = require("morgan");

module.exports = (app) => {
  app.use(morgan("tiny"));
  return (_req, _res, next) => {
    console.log("test");
    next();
  };
};
