var request = require('request');

request('http://www.google.com', function(error, response, body) { //Making get request to google.com
    console.log(body); // Send response fro googlr to console log
});