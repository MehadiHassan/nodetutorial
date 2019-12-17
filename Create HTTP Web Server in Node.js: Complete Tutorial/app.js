var http = require('http'); 

//Create server using http library
var server = http.createServer(function(request,response){
    response.writeHead(200, {'Content-Type': 'text/plain'}); // send client header information
    response.end('Welcome to the Node js'); // send string to the client as response
});

//Make the listen on port 7000
server.listen(7000);