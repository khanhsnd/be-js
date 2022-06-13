//require the mongoClient from mongodb module
const MongoClient = require('mongodb').MongoClient;
//mongodb configs
const connectionUrl = 'mongodb://localhost:27017', sampleCollection = 'chapters';

//We need to insert these chapters into mongoDB
const chapters = [{
    'Title': 'Snow Crash',
    'Author': 'Neal Stephenson'
},{
    'Title': 'Snow Crash',
    'Author': 'Neal Stephenson'
}];

MongoClient.connect(connectionUrl, function(err, client) {

    console.log("Connected correctly to server");
    const db = client.db('myproject')
    // Get some collection
    const collection =  db.collection(sampleCollection);

    collection.insertMany(chapters,function(error,result){
        console.log(result);
        if(!error) {
            console.log("Success :"+result.ops.length+" chapters inserted!");
        } else {
            console.log("Some error was encountered!");
        }
      void db.close();
    });
});