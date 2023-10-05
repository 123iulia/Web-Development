//// Connecting to DB////
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');
}

// Creating a schema (similar to collection)
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

// Creating a model under the schema//
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  rating: 10,
  review: "Peaches are so yummy!! "
});

//fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const mango = new Fruit({
  name: "Mango",
  score: 6,
  review: "Decent fruit."
});

mango.save();

Person.updateOne({name: "John"}, {favouriteFruit: mango})
.then(() => {
  console.log("Succesfully updated.");
})
.catch((err) => {
  console.log(err);
});
//person.save();
// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple
// });
//
// person.save();



//**** for  fruits names only ****
Fruit.find().then((fruits) => {

  mongoose.connection.close();

    fruits.forEach(fruit => {
        console.log(fruit.name);
    });
}).catch(err => {
     console.log(err);
});

// Fruit.updateOne({_id: "643495fd9dbc0d9689514743"}, {name: "Peach"})
// .then(() => {
//   console.log("Succesfully unpdated.");
// })
// .catch((err) => {
//   console.log(err);
// });

// Fruit.deleteOne({ name: "Peach" })
//   .then(() => {
//     console.log("Successfully Deleted");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Person.deleteMany({name: "John"})
// .then(() => {
//   console.log("Successfully Deleted All Data named JOHN");
// })
// .catch((err) => {
//   console.log(err);
// });
//*** for printing fruits array ***
// Fruit.find().then((err,fruits) => {
//     if(err){
//         console.log(err);
//     } else{
//         console.log(fruits);
//     }
//
// });
