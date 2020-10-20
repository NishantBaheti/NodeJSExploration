// constant - saves from accidentally overriding the definitionjs
const EventEmitter = require("events");
const Logger = require("./logger");
const logger = new Logger();
const path = require("path");
const os = require("os");
const fs = require("fs");

// Register a listener before emitter call
logger.on("messageLogged", (args) => {
  console.log("listener called.", args);
});
// console.log(logger);
logger.log("Logging Message.");

// var files = fs.readdirSync("./");
// console.log(files);

// asynchronous example
// using callbacks
// show files
// fs.readdir("./", function (err, files) {
//   if (err) console.log("Error Object", err);
//   else console.log(files);
// });

// // Generate error
// fs.readdir("./$", function (err, files) {
//   if (err) console.log("Error Object", err);
//   else console.log(files);
// });

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// // ES6 - ECMA6 Script
// console.log(`Total Memory :${totalMemory}`);
// console.log(`Free Memory : ${freeMemory}`);

// pathObj = path.parse(__filename);
// console.log(pathObj);

// function sayHello(name) {
//   console.log("Hello " + name);
// }
// sayHello("Nishant");
