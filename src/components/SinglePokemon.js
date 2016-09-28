import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

export default class SinglePokemon extends Component {
  render() {
    let { pokemon } = this.props;
    if(pokemon){
      let { name, weight, height, id, sprites } = pokemon;
      let { front_default } = sprites;
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <img src={front_default} width="400" height='150'/>
                <div className="caption">
                  <h3>Name: {name}</h3>
                  <h4>id: {id}</h4>
                  <h5>weight: {weight}; height: {height}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <CircularProgress size={1.5} />
      )
    }

  }
};
