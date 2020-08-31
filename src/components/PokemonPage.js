import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    search: ""
  }

  handleSearch = (event) => {
    this.setState({search: event.target.value})
  }

  filteredPokemon = () => {
    let filteredPokemon = this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.search));

    return filteredPokemon;
  }

  handleSubmit = (newPokemon) => {
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        ...newPokemon,
        sprites: {
          front: newPokemon.frontUrl,
          back: newPokemon.backUrl
        }
      })
    })
    .then(resp => resp.json())
    .then(data => this.setState(prev => ({
      pokemons: [
        ...prev.pokemons,
        data
      ]
    })))
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(data => this.setState({pokemons: data}))
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit} />
        <br />
        <Search handleSearch={this.handleSearch} />
        <br />
        <PokemonCollection pokemons={this.filteredPokemon()} />
      </Container>
    )
  }
}

export default PokemonPage