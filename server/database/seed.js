const mongoose = require ('mongoose');
const Pokemon = require ('./');
const pokemonData = require('../../pokemon.json');


const seedData = () => {
  for(let i = 0; i < pokemonData.length; i++) {
    Pokemon.Pokemon.create(pokemonData[i])
      .catch(err => console.log(err, 'Error!'))
      .then(() => console.log('Success!'))
  }
}
seedData();