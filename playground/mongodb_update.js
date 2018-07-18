const {MongoClient, ObjectID} = require('mongodb');
const url = 'mongodb://localhost:27017/Todos';
MongoClient.connect(url, (error, client) => {
  if (error) {
    console.log("Unbable to connect to MongoDB database.");
  } else {
    console.log("Connected to MongoDB database.");
  }
  client.collection('Todos').findOneAndUpdate({
    '_id': new ObjectID("5b3a5046f8b489a7f17eb67c")
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  //client.close();
});
