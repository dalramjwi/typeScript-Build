import http from "http";
const server = http
  .createServer(function (req, res) {
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Hello, World!");
    }
  })
  .listen(8080);
