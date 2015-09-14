var markdown = require('markdown').markdown;
var fs = require('fs');

var readmeStr = fs.readFileSync('README.md', 'UTF8');
console.log( markdown.toHTML(readmeStr));
