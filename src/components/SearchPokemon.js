import React, { Component } from 'react';
import PokemonActions from '../actions/PokemonActions';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: 0
    };
    this.searchOne = this.searchOne.bind(this);
    this.searchAll = this.searchAll.bind(this);
  }

  searchOne() {
    let {id} = this.state;
    PokemonActions.searchOnePokemon(id);
  }

  searchAll() {
    PokemonActions.searchAll();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="text-center">
            <input type="number" placeholder="ID" className="inputForm" value={this.state.id} onChange={e => { this.setState({id: e.target.value}) }}/>
            <button type="submit" className="btn btn-default" onClick={this.searchOne}><i className="glyphicon glyphicon-search"></i></button>
            <button type="submit" className="btn btn-primary" onClick={this.searchAll}>Search All</button>
          </div>
        </div>
      </div>
    )
  }
};
