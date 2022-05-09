const mongoose = require ('mongoose');
const Pokemon = require ('./');
const pokemonData = require('../../pokemon.json');


const seedData = () => {
  for(let i = 0; i < pokemonData.length; i++) {
    Pokemon.create(pokemonData[i])
      .catch(err => console.log(err, 'Error!'))
      .then(() => mongoose.connection.close())
  }
}

seedData();

// pokemonData.forEach((pokemonInd) => {
//   Pokemon.create(pokemonInd)
//     .catch(err => console.log(err))
//     .then(() => {mongoose.connection.close()})
// })