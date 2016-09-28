import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receiveOnePokemon(pokemon) {
    AppDispatcher.dispatch({
      type:'RECEIVE_ONE_POKEMON',
      payload: { pokemon }
    })
  },
  receiveAllPokemons(pokemons) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ALL_POKEMONS',
      payload: { pokemons }
    })
  }


}

export default ServerActions;
