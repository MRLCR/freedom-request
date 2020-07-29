const http = require('http');

http
  .createServer((req, res) => {
    if (req.url === '/favicon.ico') {
      res.writeHead(200);
      res.end();
      return;
    }
    if (req.url.includes('/api')) {
      res.writeHead(200);
      res.end(JSON.stringify({data: 'success'}));
    }
  })
  .listen(8080);
