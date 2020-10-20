const EventEmitter = require("events");
var url = "";

// console.log(__dirname);
// console.log(__filename);
class Logger extends EventEmitter {
  log(message) {
    console.log(new Date().toISOString() + " " + message);

    // Here is the emitter raising an event
    this.emit("messageLogged", {
      id: 1,
      url: "https://www.google.com",
    });
  }
}

// this exports and object from with log has to be fetched
// module.exports.log = log;
// module.exports.url = url;

// this exports only function that can directly be used
module.exports = Logger;
