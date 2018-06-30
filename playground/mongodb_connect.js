const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/Todos';
MongoClient.connect(url, (error, client) => {
  if (error) {
    console.log("Unbable to connect to MongoDB database.");
  } else {
    console.log("Connected to MongoDB database.");
  }
  client.collection('Todos').insertOne({
    text: 'Todo here',
    completed: false
  }, (err, result) => {
    if (err) {
      console.log('Unable to insert');
    }
    console.log(result.ops);
  });
  client.close();
});
