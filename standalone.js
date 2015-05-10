var http=require('http');
var server=http.createServer(function(re,res){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('<!doctype html>'
            +'<html lang="fr">'
            +'<head>'
            +'<meta Charset="utf-8">'
            +'<title>standalone nodejs</title>'
            +'</head>'
            +'<body>'
            +'<h1>Hey ! look at this title !!!</h1>'
            +'<p>paragraph</p>'
            +'</body>'
            +'</html>');
    res.end();
});

server.listen(8080);
