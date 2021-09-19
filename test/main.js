// var fs = require("fs");
// // fs is the file system module we will see it later
// var data = fs.readFileSync("input.txt");

// console.log(data.toString());
// console.log("Program Ended");
// fs.readFile("input.txt", function (err, data) {
//   //this is the callBack function
//   if (err) return console.error(err);
//   console.log(data.toString());
// });

// console.log("Program Ended");
// Import events module
// var events = require("events");

// // Create an eventEmitter object
// var eventEmitter = new events.EventEmitter();

// // Create an event handler as follows
// var connectHandler = function connected() {
//   console.log("connection succesful.");

//   // Fire the data_received event
//   eventEmitter.emit("data_received");
// };

// // Bind the connection event with the handler
// eventEmitter.on("connection", connectHandler);

// // Bind the data_received event with the anonymous function
// eventEmitter.on("data_received", function () {
//   console.log("data received succesfully.");
// });

// // Fire the connection event
// eventEmitter.emit("connection");

// console.log("Program Ended.");

// var fs = require("fs");

// fs.readFile("input.txt", function (err, data) {
//   if (err) {
//     console.log(err.stack);
//     return;
//   }
//   console.log(data.toString());
// });
// console.log("Program Ended");

// var events = require("events");
// var eventEmitter = new events.EventEmitter();

// // listener #1
// var listner1 = function listner1() {
//   console.log("listner1 executed.");
// };

// // listener #2
// var listner2 = function listner2() {
//   console.log("listner2 executed.");
// };

// // Bind the connection event with the listner1 function
// eventEmitter.addListener("connection", listner1);

// // Bind the connection event with the listner2 function
// eventEmitter.on("connection", listner2);

// var eventListeners = require("events").EventEmitter.listenerCount(
//   eventEmitter,
//   "connection"
// );
// console.log(eventListeners + " Listner(s) listening to connection event");

// // Fire the connection event
// eventEmitter.emit("connection");

// // Remove the binding of listner1 function
// eventEmitter.removeListener("connection", listner1);
// console.log("Listner1 will not listen now.");

// // Fire the connection event
// eventEmitter.emit("connection");

// eventListeners = require("events").EventEmitter.listenerCount(
//   eventEmitter,
//   "connection"
// );
// console.log(eventListeners + " Listner(s) listening to connection event");

// console.log("Program Ended.");

var fs = require("fs");

// Asynchronous - Opening File
console.log("Going to open file!");
fs.open("input.txt", "r+", function (err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("File opened successfully!");
});
var fs = require("fs");

console.log("Going to write into existing file");
fs.writeFile("input.txt", "Simply Easy Learning!", function (err) {
  if (err) {
    return console.error(err);
  }

  console.log("Data written successfully!");
  console.log("Let's read newly written data");

  fs.readFile("input.txt", function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
  });
});

fs.appendFile("movies.txt", "Titatnic", function (err) {
  if (err) throw err;
  console.log("Saved!");
});
console.log("End of code");
