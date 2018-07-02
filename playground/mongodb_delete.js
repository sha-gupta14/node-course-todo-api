const {MongoClient, ObjectID} = require('mongodb');
const url = 'mongodb://localhost:27017/Todos';
MongoClient.connect(url, (error, client) => {
  if (error) {
    console.log("Unbable to connect to MongoDB database.");
  } else {
    console.log("Connected to MongoDB database.");
  }
  // client.collection('Todos').deleteMany({'text': 'Watching TV'}).then((result) => {
  //   console.log(result);
  // });
  // client.collection('Todos').deleteOne({'text': 'Learning MDB'}).then((result) => {
  //   console.log(result);
  // });
  // client.collection('Todos').findOneAndDelete({'text': 'Free'}).then((result) => {
  //   console.log(result);
  // });
  client.collection('Todos').findOneAndDelete({'_id': new ObjectID("5b3a4e2ef8b489a7f17eb61b") }).then((result) => {
    console.log(result);
  });
  //client.close();
});
