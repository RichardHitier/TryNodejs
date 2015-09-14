var express = require( 'express');
var app = express();
var welcomePaths = ['/', '/index*'];
app.get(welcomePaths, function( req, res){
    res.sendFile(__dirname+'/app/first.html');
});
app.use(function( req, res){
    res.sendFile(__dirname+'/app/404.html');
});
app.listen(8080);
