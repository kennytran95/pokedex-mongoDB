import React from 'react';
import pokemon from './pokemon.js';
import Pokemons from './Pokemons.jsx';
import ShowAll from './ShowAll.jsx';
import Types from './Types.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: pokemon
    }
  }

  render() {
    return (
      <div>
        <div className='pokemon-title-container'>
          <h1>Pokemon!</h1>
          <ShowAll />
          <Types />
        </div>
        <div className='pokemon-container'>
          <Pokemons pokemons={this.state.pokemons}/>
        </div>
      </div>
    )
  }
}
//this.state.pokemons
export default App;