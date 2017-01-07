var express = require('express');
var path = require('path');
var open = require('open');

var app = express();

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, '../src', req.path));	
});

app.get('/', function(req, res) {

	res.sendFile(path.join(__dirname, '../src', 'index.html'));	
});

app.listen(3000, function() {});

 open('http://localhost:3000');