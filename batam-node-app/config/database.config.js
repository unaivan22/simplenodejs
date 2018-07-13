// module.exports = {
// url: 'mongodb://localhost:27017/batam'
// MongoClient.connect("mongodb://localhost:27017/batam", { useNewUrlParser: true })
// }


var MongoClient = require('mongodb').MongoClient;
var database = undefined;
var dbUrl = 'mongodb://localhost:27017/batam';
MongoClient.connect(dbUrl, function(err, db) {
  if (err) {
    throw err;
  } else {
    database = db;
    console.log('MongoDB connection successful');
}
});

