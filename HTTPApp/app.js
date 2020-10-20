const http = require("http");
// listener is added in def only
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }

  if (req.url == "/api/details") {
    res.write(
      JSON.stringify({
        status: "success",
        message: "details",
      })
    );
    res.end();
  }
});

// // listener before emitter
// server.on("connection", (socket) => {
//   console.log("New Connection");
// });

// emitter
server.listen(3000);

console.log("listening to port", 3000);
