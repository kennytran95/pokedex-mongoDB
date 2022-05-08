import React from 'react';

const PokemonEntry = ({PokemonEntry}) => {
  return(
    <div>
      <div>
        <img src={PokemonEntry.img} />
        {PokemonEntry.name}
      </div>
    </div>
  )
}

export default PokemonEntry;