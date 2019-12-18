// we create 'employee' collection in newdb database
var url = "mongodb://localhost:27017/employeedb";
 
// create a client to mongodb
var MongoClient = require('mongodb').MongoClient;
 
// make client connect to mongo service
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    // db pointing to newdb
    console.log("Switched to "+db.s.options.dbName+" database");
    var dbase = db.db("employeedb"); //here
    dbase.createCollection("employee", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();   //close method has also been moved to client obj
    });
});