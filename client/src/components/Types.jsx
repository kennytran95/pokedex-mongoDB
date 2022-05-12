import React from 'react';

const Types = ( {filter} ) => {
  return (
      <select id="cars" onChange={(event) => filter(event.target.value)}>
        <option>Sort by Type</option>
        <option>Grass</option>
        <option>Fire</option>
        <option>Water</option>
        <option>Normal</option>
        <option>Poison</option>
        <option>Electric</option>
        <option>Ground</option>
        <option>Fighting</option>
        <option>Psychic</option>
        <option>Rock</option>
        <option>Ghost</option>
        <option>Dragon</option>
      </select>
  )
}

export default Types;