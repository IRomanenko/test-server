/*jshint esversion: 6 */

var http = require('http'),
    config = {
      ip : '0.0.0.0',
      port : 3343
    };

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>It is alive!!!</h1>\n');
}).listen(config.port, config.ip);

console.log(`Server running on port ${config.port}.`);
