import React from 'react';
import Button from './Button';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {

  constructor() {
    super();
    this.state = {
      contador: 0
    }

    this.eventClick = this.eventClick.bind(this)
  }

  eventClick() {
    console.log(this)
    this.setState((anterior, _props) => ({
      contador: anterior.contador !== this.props.pokemons.length - 1 ? anterior.contador + 1 : anterior.contador - 8
    }))
  }

  render() {
    return (
      <div className="pokedex">
        <div>
          <Pokemon pokemon={this.props.pokemons[this.state.contador]} />
        </div>
        <div>
          <Button click={this.eventClick} />
        </div>
      </div>
      
    );
  }
}

export default Pokedex;