const http = require('http');

const PORT = 4418; // Application port
const HOST = '0.0.0.0'; // Listen on all interfaces

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from ECS Fargate!\n');
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
