const EventEmitter = require("events");
// const emitter = new EventEmitter();
// emitter.on("exampleEvent", ({ id, url }) => {
//   console.log("This is example", id, url);
// });
//
// emitter.emit("exampleEvent", { id: 1, url: "https://dummy.jp" });

class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    this.emit("messageLogged", { id: 1, url: "https://dummy.jp" });
  }
}

const logger = new Logger();
logger.on("messageLogged", ({ id, url }) => {
  console.log("messageLogged", id, url);
});

module.exports = logger;
