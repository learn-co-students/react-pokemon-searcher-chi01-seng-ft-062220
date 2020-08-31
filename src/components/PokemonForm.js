import React from "react";
import { Form } from "semantic-ui-react";

class PokemonForm extends React.Component {
  state = {
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={() => this.props.handleSubmit(this.state)}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              onChange={this.handleChange}
              label="Name"
              placeholder="Name"
              name="name"
              value={this.state.name}
            />
            <Form.Input
              fluid
              onChange={this.handleChange}
              label="hp"
              placeholder="hp"
              name="hp"
              value={this.state.hp}
            />
            <Form.Input
              fluid
              onChange={this.handleChange}
              label="Front Image URL"
              placeholder="url"
              name="frontUrl"
              value={this.state.frontUrl}
            />
            <Form.Input
              fluid
              onChange={this.handleChange}
              label="Back Image URL"
              placeholder="url"
              name="backUrl"
              value={this.state.backUrl}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default PokemonForm;
