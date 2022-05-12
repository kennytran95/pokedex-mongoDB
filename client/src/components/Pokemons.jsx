import React from 'react';
import PokemonEntry from './PokemonEntry.jsx'

const Pokemons = ({pokemons, remove}) => {
  return (
    <div className='pokemon-list'>{pokemons.map((pokemon) =>
      <PokemonEntry PokemonEntry={pokemon} remove={remove} key={pokemon.name}/>
    )}
    </div>
  )
}

export default Pokemons;