// var http = require('http');
// var EventEmitter = require('events').EventEmitter;
// 
// function onRequest(req, res) {
// 
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write("yo");
//     res.end();
// }
// 
// 
// function start() {
// 
//     var server = http.createServer();
//     console.log('Server running at http://127.0.0.1:8080/');
//     server.on('request', onRequest);
//     server.on('hello', function(message){
//         console.log('server getting hello '+message);
//     });
//     server.listen(8080,'127.0.0.1');
// 
//     var jeu = new EventEmitter();
//     jeu.emit('hello', 'toi');
// 
// }
// 
// start();
var EventEmitter = require('events').EventEmitter;
var jeu = new EventEmitter();
jeu.on('gameover', function(message){
    console.log("received gameover event: "+message);
});
jeu.emit('gameover', 'You lost !!');
