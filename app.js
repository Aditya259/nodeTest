const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, () => {
  var os = require("os");
  var hostname = os.hostname();
  console.log(`Server running at http://${hostname}:${port}/`);
});