import API from '../API';

const PokemonActions = {
  searchOnePokemon(id) {
    API.searchOnePokemon(id);
  },
  searchAll() {
    API.searchAll();
  },
  searchGroup(id) {
    API.searchGroup(id);
  }
}

export default PokemonActions;
