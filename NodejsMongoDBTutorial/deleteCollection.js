// example : delete 'users' collection in newdb database
var url = "mongodb://localhost:27017/newdb";
 
// create a client to mongodb
var MongoClient = require('mongodb').MongoClient;
 
// make client connect to mongo service
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    // db pointing to newdb
    console.log("Switched to "+db.databaseName+" database");
    // get reference to collection
    db.collection("users", function(err, collection) {
        // handle the error if any
        if (err) throw err;
        // delete the mongodb collection
        collection.remove({}, function(err, result){
            // handle the error if any
            if (err) throw err;
            console.log("Collection is deleted! "+result);
            // close the connection to db when you are done with it
            db.close();
        });
    });
});