var express = require( 'express');
var url = require('url');
var app = express();

var welcomePaths = ['/', '/index*'];
app.get(welcomePaths, function( req, res){
    res.sendFile(__dirname+'/app/first.html');
});

app.use(function( req, res){
    res.render(__dirname+'/app/404.ejs', {wrongpath: url.parse(req.url).pathname});
});

app.listen(8080);
