import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';

let _pokemon = null;
let _pokemons = null;

class PokemonStore extends EventEmitter {
  constructor(props) {
    super(props);
    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_ONE_POKEMON':
          _pokemon = action.payload.pokemon;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_ALL_POKEMONS':
          _pokemons = action.payload.pokemons;
          this.emit('CHANGE');
          break;

      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getPokemon() {
    return _pokemon;
  }

  getAllPokemons() {
    return _pokemons;
  }
}

export default new PokemonStore();
