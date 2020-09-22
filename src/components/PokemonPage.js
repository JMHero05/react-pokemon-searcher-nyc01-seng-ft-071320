import React from 'react';
import PokemonCollection from './PokemonCollection';
import PokemonForm from './PokemonForm';
import Search from './Search';
import { Container } from 'semantic-ui-react';

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    searchValue: '',
  };

  searchHandler = (e) => {
    e.persist();
    this.setState(() => ({
      searchValue: e.target.value,
    }));
  };

  filteredNames = () => {
    let filteredNames = this.state.pokemon.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
    );
    return filteredNames;
  };

  addPokemon = (obj) => {
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        name: obj.name,
        hp: obj.hp,
        sprites: {
          front: obj.frontUrl,
          back: obj.backUrl,
        },
      }),
    })
      .then((res) => res.json())
      .then((newPokemon) => {
        this.setState((previousState) => ({
          pokemon: [...previousState.pokemon, newPokemon],
        }));
      });
  };

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search
          search={this.searchHandler}
          searchValue={this.state.searchValue}
        />
        <br />
        <PokemonCollection pokemon={this.filteredNames()} />
      </Container>
    );
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon/')
      .then((res) => res.json())
      .then((data) => {
        this.setState(() => ({
          pokemon: data,
        }));
      });
  }
}

export default PokemonPage;
