var http = require('http');
var url = require('url');
var querystring = require('querystring');

function onRequest(req, res) {

    var page = url.parse(req.url).pathname;
    var params = querystring.parse(url.parse(req.url).query);
    var myRequest='requesting page: '+ page;
    res.writeHead(200, {'Content-Type': 'text/html'});
    //routing
    res.write(getHtmlHeader());
    res.write( myRequest+"</br>");
    if( 'nom' in params)
        res.write( "votre nom: "+params['nom']);
    if (page=='/') {
        res.write("</br>A la racine");
    } else if  ( page=='/mapage') {
        res.write("</br>A ta page");
    } else {
        res.write("</br>mauvaise page");
    }
    res.write(getHtmlFooter());
    res.end();
}

function getHtmlHeader(){
    return('<!doctype html>'
            +'<html lang="fr">'
            +'<head>'
            +'<meta Charset="utf-8">'
            +'<title>standalone nodejs</title>'
            +'</head>'
            +'<body>'
            +'<h1>Hey ! look at this title !!!</h1>'
            +'<p>paragraph</p>');

}

function getHtmlFooter(){
            return('</body>'
            +'</html>');
}
function start() {

http.createServer( onRequest ).listen(8080, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8080/');

}

exports.start = start;
