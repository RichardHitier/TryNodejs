var http = require('http');

function onRequest(req, res) {
    console.log('requesting');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Bonjour Monde\n');
}

function start() {

http.createServer( onRequest ).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

}

exports.start = start;
