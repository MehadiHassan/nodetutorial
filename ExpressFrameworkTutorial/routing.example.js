//For example, a client can make a GET, POST, PUT or DELETE http request for various URL such as the ones shown below;

//http://localhost:3000/Books
//http://localhost:3000/Students

// General Syntax
// app.METHOD(PATH, HANDLER)
// --> METHOD=>GET,POST, PUT or DELETE
// --> PATH=> Path on the server
// --> HANDLER=> Is the function executed when the route is matched.

var express = require('express');
var app = express();

// define the about route
app.get('/about', (function (req, res) {
    res.send('About birds');
}))
  

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
});

app.get('/',(function(req,res){
    res.send('Welcome to Guru99 Tutorials');
}));

var server = app.listen(3002, function(){

});