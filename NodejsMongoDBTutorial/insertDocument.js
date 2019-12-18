 
// we create 'employee' collection in newdb database
var url = "mongodb://localhost:27017/employeedb";

// create a client to mongodb
var MongoClient = require('mongodb').MongoClient;
 
// make client connect to mongo service
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    // db pointing to employeedb
    console.log("Switched to "+db.s.options.dbName+" database");
    var doc = { id:"02", name:"employee2", age:"22"};
    var dbase = db.db("employeedb");
    dbase.collection("employee").insertOne(doc, function(err, res){
        if (err) throw err;
        console.log('Document Inserted');
        // close the connection to db when you are done with it
        // db.close();
    });
    // Insert Many
    // documents to be inserted
    var docsmany = [{ id:"01", name:"employee1", age:"22"},
    { id:"02", name:"employee2", age:"23"},
    { id:"03", name:"employee3", age:"24"}];

        // insert multiple documents to 'users' collection using insertOne
        dbase.collection("employee").insertMany(docsmany, function(err, res) {
            if (err) throw err;
            console.log(res.insertedCount+" documents inserted");
            // close the connection to db when you are done with it
            db.close();
        });    
});