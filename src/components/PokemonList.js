import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import PokemonActions from '../actions/PokemonActions';

export default class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.viewOnePokemon = this.viewOnePokemon.bind(this);
    this.previousList = this.previousList.bind(this);
    this.nextList = this.nextList.bind(this);
  }

  viewOnePokemon(id) {
    PokemonActions.searchOnePokemon(id);
  }

  previousList(id) {
    let preveiousId;
    if (id === '20') {
      PokemonActions.searchAll();
    } else {
      preveiousId = Number(id) - 40;
      PokemonActions.searchGroup(preveiousId);
    }
  }

  nextList(id) {
    PokemonActions.searchGroup(id);
  }

  render() {
    let { pokemons } = this.props;
    let rows, pokemonsArr, lastOne, lastUrl, lastUrlArr, lastId;
    if (pokemons) {
      pokemonsArr = pokemons.results;
      lastOne = pokemonsArr[pokemonsArr.length-1];
      lastUrl = lastOne.url;
      lastUrlArr = lastUrl.split('/');
      lastId = lastUrlArr[lastUrlArr.length - 2];
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
        <ul className="pager">
          <li><a onClick={()=>this.previousList(lastId)}>Previous</a></li>&nbsp;&nbsp;
          <li><a onClick={()=>this.nextList(lastId)}>Next</a></li>
        </ul>
      </div>
    )
  }
};
