const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Context-Type', 'text/plain');
    res.end('Hello World\nKhoa sieu cap dep trai')
});

server.listen(port, hostname,() => {
    console.log(`Server running at http://${hostname}:${port}/`)
});