import React, { Component } from 'react';

import './App.css';
import pokemonData from './data';
import Footer from './footer';
import Header from './header';
import Pokemons from './pokemons';
import Buttons from './buttons';

class App extends Component {
  constructor(props) {
    super(props)
    this.nextPokemon = this.nextPokemon.bind(this)
    this.filterPokemons = this.filterPokemons.bind(this)
    this.myCustomArray = pokemonData;
    this.state = {
      currentPokemon: this.myCustomArray[0]
    }
  }

  nextPokemon() {
    this.setState(previousState => {
      const nextPokemon = this.myCustomArray[this.myCustomArray.indexOf(previousState.currentPokemon) + 1]
      if (nextPokemon) {
        return { currentPokemon: nextPokemon }
      }
      return { currentPokemon: this.myCustomArray[0] }
    })
  }

  filterPokemons(pokemonType='All') {
    this.setState(() => {
      if(pokemonType === 'All') {
        this.myCustomArray = pokemonData;
      }
      else {
        this.myCustomArray = pokemonData.filter(({ type }) => type === pokemonType)
      }
      return { currentPokemon: this.myCustomArray[0] }
    })
  }

  render() {
    // const pokemonsList = createElement('main', { className:'myPokedex' },
    //   pokemonData.map((eachPokemon, index) => {
    //     if(eachPokemon.type === 'Electric') {
    //       return <Pokemons pokemon={ eachPokemon } key={ index }/>
    //     }
    //   })
    // )
    return (
      <>
        <Header />
        <Pokemons pokemon={ this.state.currentPokemon } />
        <Buttons nextPokemon={ this.nextPokemon } filterByType={ (event) => this.filterPokemons(event.target.innerText) } />
        <Footer />
      </>
    );
  }
}

export default App;
