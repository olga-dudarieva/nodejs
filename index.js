const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const file = req.url === '/' ? 'index.html' : req.url;
  const filePath = path.join(__dirname, 'public', file);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, {
        'Content-Type': 'text/html',
      });
      res.end('<h3>Page not found</h3>');
    }

    let contentType = 'text/html';
    const fileExt = path.extname(filePath);

    if (fileExt === '.css') {
      contentType = 'text/css';
    } else if (fileExt === '.js') {
      contentType = 'text/javascript';
    }

    res.writeHead(200, {
      'Content-Type': contentType,
    });
    res.end(content);
  });
});

server.listen(3000, () => {
  console.log('server started 11');
});
