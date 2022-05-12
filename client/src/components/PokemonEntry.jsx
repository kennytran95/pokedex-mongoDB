import React from 'react';

const PokemonEntry = ({PokemonEntry, remove}) => {
  return(
    <div>
      <div className='pokemon-container'>
        <img src={PokemonEntry.img} className='pokemon-img'/>
        {PokemonEntry.name}
        <button className='del-btn' onClick={(event) => remove(PokemonEntry.name)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default PokemonEntry;