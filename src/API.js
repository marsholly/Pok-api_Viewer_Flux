import $ from 'jquery'
import ServerActions from './actions/ServerActions';

const API = {
  searchOnePokemon(id) {
    $.get(`http://pokeapi.co/api/v2/pokemon/${id}`, pokemon => {
      ServerActions.receiveOnePokemon(pokemon);
    })
  },
  searchAll() {
    $.get('https://pokeapi.co/api/v2/pokemon/', pokemons => {
      ServerActions.receiveAllPokemons(pokemons);
    })
  },
  searchGroup(id) {
    $.get(`https://pokeapi.co/api/v2/pokemon/?offset=${id}`, pokemons => {
      ServerActions.receiveAllPokemons(pokemons);
    })
  }
}

export default API;
