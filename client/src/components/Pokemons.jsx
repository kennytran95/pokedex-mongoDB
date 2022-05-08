import React from 'react';
import PokemonEntry from './PokemonEntry.jsx'

const Pokemons = ({pokemons}) => {
  return (
    <div className='pokemon-list'>{pokemons.map((pokemon) =>
      <PokemonEntry PokemonEntry={pokemon} key={pokemon.name}/>
    )}
    </div>
  )
}

export default Pokemons;