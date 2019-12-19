var express = require('express');
var app = express();
// we create 'employee' collection in newdb database
var url = "mongodb://localhost:27017/employeedb";
 
// create a client to mongodb
var MongoClient = require('mongodb').MongoClient;

var str = "";

app.route('/Employee').get(function(req, res) {
   MongoClient.connect(url, function(err, db) {
        var dbase = db.db("employeedb"); //here
       var collection = dbase.collection('employee');
       var cursor = collection.find({});
       str = "";
       cursor.forEach(function(item) {
           if (item != null) {
                   str = str + "    Employee id  " + item.name + "</br>";
           }
       }, function(err) {
           res.send(str);
           db.close();
          }
       );
   });
});
var server = app.listen(3002, function() {});