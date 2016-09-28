import React, { Component } from 'react';
import SinglePokemon from './SinglePokemon';
import PokemonList from './PokemonList';
import PokemonStore from '../stores/PokemonStore';

export default class ViewPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: PokemonStore.getPokemon(),
      pokemons: PokemonStore.getAllPokemons()
    }

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    PokemonStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    PokemonStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      pokemon: PokemonStore.getPokemon(),
      pokemons: PokemonStore.getAllPokemons()
    })
  }

  render() {
    let { pokemon, pokemons } = this.state;
    return (
      <div className="row">
        <div className="showArea">
          <div className="col-md-4">
            <SinglePokemon pokemon = { pokemon } />
          </div>
          <div className="col-md-8">
            <PokemonList pokemons = { pokemons } />
          </div>
        </div>
      </div>
    )
  }
};
