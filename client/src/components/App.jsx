import React from 'react';
import Pokemons from './Pokemons.jsx';
import ShowAll from './ShowAll.jsx';
import Types from './Types.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      typePokemon: []
    }
  }

  componentDidMount() {
    axios.get('/pokemon')
      .catch((err) => console.log(err))
      .then((data) => {
        this.setState({
          pokemons: data.data
        })
      })
  }

  remove(name) {
    axios.delete(`/pokemon/${name}`)
      .then(() => {
        axios.get('/pokemon')
          .then((result) => {
            this.setState({
              typePokemon:result.data
            })
          })
      })
  }

  filter(type) {
    console.log(type);
    this.state.typePokemon = [];
    let copy = this.state.pokemons;
    let result = [];
    for(let i = 0; i < copy.length; i++) {
      if(copy[i].type === type) {
        result.push(copy[i]);
      }
    }
    if(type === 'Sort by Type') {
      axios.get('/pokemon')
        .then((data) => {
          console.log(data.data)
          this.setState({
            typePokemon: data.data
          })
        })
    } else {
      this.setState({
        typePokemon: result
      })
    }
  }

  show() {
    axios.get('/pokemon')
      .then((result) => {
        console.log(result.data, 'all 151')
        this.setState({
          typePokemon: result.data
        })
      })
  }

  render() {
    return (
      <div>
        <div className='pokemon-title-container'>
          <h1>Pokemon!</h1>
          <ShowAll show={this.show.bind(this)}/>
          <Types filter={this.filter.bind(this)} />
        </div>
        <div className='pokemon-container'>
          {this.state.typePokemon.length === 0 ? <Pokemons pokemons={this.state.pokemons} remove={this.remove.bind(this)}/> : <Pokemons pokemons={this.state.typePokemon} remove={this.remove.bind(this)}/>}
        </div>
      </div>
    )
  }
}
//this.state.pokemons
export default App;