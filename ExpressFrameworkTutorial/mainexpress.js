var express = require('express');

var app = express(); // Create an object of the express module

app.set('view engine', 'jade');


app.get('/', function(req,res){
    // res.send('Hello World');
    res.render('index', {title:'Mehadi BLOG', message:'Welcome to the node js world.'});
});

var server = app.listen(3001, function() {

});