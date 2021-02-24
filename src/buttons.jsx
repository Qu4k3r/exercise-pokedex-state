import React, { Component, createElement } from 'react';
import pokemons from './data';

class Buttons extends Component {
  render() {
    const { nextPokemon, filterByType } = this.props;
    const arrayOfTypes = [];
    pokemons.forEach(({ type }) => !arrayOfTypes.includes(type) && arrayOfTypes.push(type));
    const typeButtons = arrayOfTypes.map(type => createElement('button', { className: 'button', onClick: filterByType }, type));

    return(
      <div className="myButtons">
        <button className="button next" onClick={ nextPokemon }>Próximo Pokémon</button>
        { typeButtons }
        {/* <button className="button fire" onClick={ filterByType }>Fire</button> */}
        {/* <button className="button psychic" onClick={ filterByType }>Psychic</button> */}
        <button className="button all" onClick={ filterByType }>All</button>
      </div>
    )
  }
}

export default Buttons;

//React tem padrao? Usa-se mais JSX ou JS, metodos como createElement, por exemplo ...
// Componentes enxergam suas próprias props, ou seja, seus próprios obj; não é possível acessar state de outro componente, por exemplo, certo?
// Como eu posso organizar melhor meus componentes? MUITA Dificuldade nessa parte
