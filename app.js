const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log("Response Object =>", req);
});

server.listen(PORT);
