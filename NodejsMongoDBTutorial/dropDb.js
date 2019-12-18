// newdb is the database we drop
var url = "mongodb://localhost:27017/newdb";
 
// create a client to mongodb
var MongoClient = require('mongodb').MongoClient;
 
// make client connect to mongo service
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Connected to Database!");
    // print database name
    console.log("db object points to the database : "+ db.databaseName);
    // delete the database
    db.dropDatabase(function(err, result){
        console.log("Error : "+err);
        if (err) throw err;
        console.log("Operation Success ? "+result);
        // after all the operations with db, close it.
        db.close();
    });
});