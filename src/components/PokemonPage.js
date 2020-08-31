import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    search: ''
  }
  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          pokemon: data,
          search: ''
        })
      })
  }

  lookUp = (e) => {
    this.setState({ search: e.target.value })
    //console.log(this.state.search)
  }

  addPokemon = pokieData => {
    this.setState({ pokemon: [...this.state.pokemon, pokieData] });
  }

  render() {
    //console.log(this.state)
    const searchedPokemon = this.state.pokemon.filter(pokie => 
      pokie.name.includes(this.state.search)
    )
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={this.lookUp}/>
        <br />
        <PokemonCollection pokemon={searchedPokemon} />
      </Container>
    )
  }
}

export default PokemonPage
