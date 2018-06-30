const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/Todos';
MongoClient.connect(url, (error, client) => {
  if (error) {
    console.log("Unbable to connect to MongoDB database.");
  } else {
    console.log("Connected to MongoDB database.");
  }
  client.collection('Todos').find({completed: false}).toArray().then((result) => {
    console.log(result);
  }, (error) => {
    console.log('Unable to fetch data: ', error);
  });
  client.close();
});
