const mongoose = require('mongoose');

const db = mongoose.connect("mongodb://localhost/testdb", () => {
  console.log("Connected to mongoDB with localhost!")
}, (err) => {
  console.log(err)
});

const pokemonSchema = new mongoose.Schema({
  name: String,
  type: String,
  img: String
});


const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;