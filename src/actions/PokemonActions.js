import API from '../API';

const PokemonActions = {
  searchOnePokemon(id) {
    API.searchOnePokemon(id);
  },
  searchAll() {
    API.searchAll();
  }
}

export default PokemonActions;
