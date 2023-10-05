//jshint esversion:6
//const MongoClient = require('mongodb').MongoClient;
//const assert = require('assert');

// Connection URL
//const url = "mongodb://localhost:27017";

// Database Name
//const dbName = 'fruitsDB';

// Create a new MongoClient
//const client = new MongoClient(url, {useNewUrlParser: true });

// Use connect method to connect to the Server
//client.connect(function(err) {
//assert.equal(null, err);
//console.log("Connected successfully to server");

//const db = client.db(dbName);

//client.close();
//})

const {
  MongoClient
} = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
//const url = 'mongodb://localhost:27017';
const uri = "mongodb://127.0.0.1:27017";
//const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

// Database Name

// Database Name
const dbName = 'myProject';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('fruits');

  // the following code examples can be pasted here...

  // Insert
  const insertResult = await collection.insertMany([
    { name: 'Apple',
      score: 7,
      rating: 'pretty solid fruit, eat when you get sick!'
    },
    { name: 'Peach',
      score: 8,
      rating: 'Juice, nice to eat in Summer'
    },
    { name: 'Tangerine',
      score: 10,
      rating: 'My favorite!'
    }]);
  console.log('Inserted documents =>', insertResult);

    // Read
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);

  return 'done.';
}


main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());






















  //jshint esversion:6
  //const MongoClient = require('mongodb').MongoClient;
  //const assert = require('assert');

  // Connection URL
  //const url = "mongodb://localhost:27017";

  // Database Name
  //const dbName = 'fruitsDB';

  // Create a new MongoClient
  //const client = new MongoClient(url, {useNewUrlParser: true });

  // Use connect method to connect to the Server
  //client.connect(function(err) {
  //assert.equal(null, err);
  //console.log("Connected successfully to server");

  //const db = client.db(dbName);

  //client.close();
  //})

  const {
    mongoose
  } = require('mongoose');
  // or as an es module:
  // import { MongoClient } from 'mongodb'
  mongoose.connect("mongodb://127.0.0.1:27017/myProject", { useNewUrlParser: true });

  const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: Number,
    review: String
  });
  // Connection URL
  //const url = 'mongodb://localhost:27017';
  ////#const uri = 'mongodb://127.0.0.1:27017';
  //#const client = new MongoClient(uri);
  const Fruit = mongoose.model("Fruit", fruitSchema);

  const fruit = new Fruit ({
    name: "Apple",
    rating: 7,
    review: 'pretty solid fruit, eat when you get sick!'
  })
  // Database Name

  // Database Name
  //#const dbName = 'myProject';

  //#async function main() {
    // Use connect method to connect to the server
    //#await client.connect();
    //#console.log('Connected successfully to server');
    //#const db = client.db(dbName);
    const collection = db.collection('fruits');

    // the following code examples can be pasted here...

    // Insert
    const insertResult = collection.insertMany([
      { name: 'Apple',
        score: 7,
        rating: 'pretty solid fruit, eat when you get sick!'
      },
      { name: 'Peach',
        score: 8,
        rating: 'Juice, nice to eat in Summer'
      },
      { name: 'Tangerine',
        score: 10,
        rating: 'My favorite!'
      }]);
    console.log('Inserted documents =>', insertResult);

      // Read
    const findResult = collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    return 'done.';



  main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
