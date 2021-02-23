import React, { Component, createElement } from 'react';
import pokemons from './data';

class Buttons extends Component {
  render() {
    const { nextPokemon, filterByFire, filterByPsychic, resetAll } = this.props;
    const arrayOfTypes = [];
    pokemons.forEach(({ type }) => {
      if (!arrayOfTypes.includes(type)) {
        arrayOfTypes.push(type)
      }
    })
    const typeButtons = arrayOfTypes.map(type => createElement('button', { className: 'button', onClick: `filterBy${type}` }, type));
    return(
      <div className="myButtons">
        <button className="button next" onClick={ nextPokemon }>Próximo Pokémon</button>
        { typeButtons }
        {/* <button className="button fire" onClick={ filterByFire }>Fogo</button> */}
        {/* <button className="button psychic" onClick={ filterByPsychic }>Psychic</button> */}
        <button className="button all" onClick={ resetAll }>All</button>
      </div>
    )
  }
}

export default Buttons;
