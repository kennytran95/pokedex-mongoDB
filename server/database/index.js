const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/testdb",  { useNewUrlParser: true });

const pokemonSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  name: String,
  type: String,
  img: String
});


const Pokemon = mongoose.model('Pokemon', pokemonSchema);

// const addPokemon = (data) => {
//   console.log(data, 'data of the pokemon added into database')
//   Pokemons.create(data)
//     .catch((err) => console.log(err))
//     .then(console.log('Registered Pokemon to Pokedex!'))
// }

const getPokedex = () => {
  return Pokemon.find().exec();
}

module.exports.Pokemon = Pokemon;
// module.exports.addPokemon = addPokemon;
module.exports.getPokedex = getPokedex;