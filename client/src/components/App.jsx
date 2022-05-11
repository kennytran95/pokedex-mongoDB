import React from 'react';
import Pokemons from './Pokemons.jsx';
import ShowAll from './ShowAll.jsx';
import Types from './Types.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    }
  }

  componentDidMount() {
    axios.get('/pokemon', (data) => {
      console.log('Nice')
    })
      .catch((err) => console.log(err))
      .then((data) => {
        console.log(data);
        this.setState({
          pokemons: data.data
        })
      })
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