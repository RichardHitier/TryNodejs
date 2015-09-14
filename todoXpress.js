var express = require( 'express');
var url = require('url');
var app = express();

app.get('/add_tasks', function( req, res){
}
app.get('/del_tasks', function( req, res){
}
app.get('/list_tasks', function( req, res){
    // set tasks
    res.render(__dirname+'/app/list_tasks.ejs');
});

app.use(function( req, res){
    res.render(__dirname+'/app/404.ejs', {wrongpath: url.parse(req.url).pathname});
});

app.listen(8080);
