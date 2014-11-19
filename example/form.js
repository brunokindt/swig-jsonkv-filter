var swig = require('swig');
var jsonkv = require('../filters/jsonkv');

swig.setFilter("jsonkv", jsonkv);

var template = swig.compileFile('./form.html');
var output = template();

console.log(output);
