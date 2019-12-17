var express = require('express');

var app = express(); // Create an object of the express module

app.get('/', function(req,res){
    res.send('Hello World');
});

var server = app.listen(3001, function() {

});