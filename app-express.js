var htutil = require('./basic/htutil');
var math = require('./basic/math');
var express = require('express');
var app = express.createServer(
    express.logger()
);

app.regitster('.html', require('ejs'));
// Optional since express defaults to CWD/Views
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
l



