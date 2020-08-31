import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  state = {
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  }

  nameChange = (e) => {
    this.setState({ name: e.target.value });
  }

  hpChange = (e) => {
    this.setState({ hp: e.target.value });

  }

  frontUrl = (e) => {
    this.setState({ frontUrl: e.target.value });
  }

  backUrl = (e) => {
    this.setState({ backUrl: e.target.value });
  }

  postRequest = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        hp: this.state.hp,
        sprites:{
          front: this.state.frontUrl,
          back: this.state.backUrl
        }
      })
    })
      .then(resp => resp.json())
      .then(pokieData => this.props.addPokemon(pokieData))
  }

  render() {
    //console.log(this.state)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.postRequest}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.nameChange} value={this.props.value} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.hpChange} value={this.props.value} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.frontUrl} value={this.props.value}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.backUrl} value={this.props.value}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
