import React, { Component } from 'react';
import SearchPokemon from './SearchPokemon';
import ViewPokemon from './ViewPokemon';
import { MuiThemeProvider } from 'material-ui';
import '../css/style.css';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <h1 className="text-center">Pokéapi Viewer</h1>
          <SearchPokemon />
          <ViewPokemon />
        </div>
      </MuiThemeProvider>
    )
  }
};
