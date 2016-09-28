import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import PokemonActions from '../actions/PokemonActions';

export default class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.viewOnePokemon = this.viewOnePokemon.bind(this);
  }
  viewOnePokemon(id) {
     PokemonActions.searchOnePokemon(id);
  }

  render() {
    let { pokemons } = this.props;
    let rows;
    if (pokemons) {
    let pokemonsArr = pokemons.results;
      rows = pokemonsArr.map(pokemon => {
        let { name, url} = pokemon;
        let urlArr = url.split('/');
        let id = urlArr[urlArr.length - 2];
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>
              <button className="btn btn-xs btn-info" onClick={() => this.viewOnePokemon(id)}>
                <i className="glyphicon glyphicon-eye-open"></i>
              </button>
            </td>
          </tr>
        )
      })
    } else {
      rows = <tr></tr>
    }
    return (
      <div>
        
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>

    )
  }
};
