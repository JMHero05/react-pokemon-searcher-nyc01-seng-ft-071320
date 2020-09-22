import React from 'react';
import { Form } from 'semantic-ui-react';

class PokemonForm extends React.Component {
  state = {
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: '',
  };

  onChangeHandler = (e) => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }));
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log('submitting form...');
    this.props.addPokemon(this.state);
    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: '',
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.submitHandler}>
          <Form.Group widths='equal'>
            <Form.Input
              fluid
              label='Name'
              placeholder='Name'
              name='name'
              onChange={this.onChangeHandler}
              value={this.state.name}
            />
            <Form.Input
              fluid
              label='hp'
              placeholder='hp'
              name='hp'
              onChange={this.onChangeHandler}
              value={this.state.hp}
            />
            <Form.Input
              fluid
              label='Front Image URL'
              placeholder='url'
              name='frontUrl'
              onChange={this.onChangeHandler}
              value={this.state.frontUrl}
            />
            <Form.Input
              fluid
              label='Back Image URL'
              placeholder='url'
              name='backUrl'
              onChange={this.onChangeHandler}
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
