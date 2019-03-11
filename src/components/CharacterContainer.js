import React, { Component } from 'react'

import firestore from '../utils/Firestore'
import firebase from 'firebase'

import CharacterCard from './CharacterCard.js'
import StartGame from './StartGame.js'
import GameOver from './GameOver.js'

export default class CharacterContainer extends Component {

  state = {
    characters: [null],
    viewed: [],
    character: null,
    gameOver: false,
    newGame: true
  }

  componentDidMount(){
    const db = firebase.firestore();
    db.collection('characters').get()
    .then(res => res.docs.forEach((el) => {
      this.setState({ characters: [...this.state.characters, el.data()]})
    }))
  }

  getUnviewed = () => {
    return this.state.characters.filter(character => {
      return !this.state.viewed.includes(character)
    });
  }

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  renderFirstCharacter = () => {
    let characters = this.state.characters
    let num = this.getRandomInt(characters.length)
    let c = characters[num]
    return c
  }

  renderNextCharacter = () => {
    let unviewed = this.getUnviewed()
    let num = this.getRandomInt(unviewed.length)
    let c = unviewed[num]
    return c
  }


  handleClick = (e, c) => {
    if ((e.target.name === "alive") && (c.alive))  {
      this.setState({ viewed: this.state.viewed.concat(c)})
    } else if (!(e.target.name === "alive") && !(c.alive)) {
      this.setState({ viewed: this.state.viewed.concat(c)})
    } else {
      this.setState({ gameOver: true })
    }
  }

  selectCharacter = () => {
    if (this.state.newGame) {
      return <StartGame startGame={this.startGame} />
    } else if (this.state.gameOver) {
        return <GameOver restartGame={this.restartGame} streak={this.state.viewed.length} />
    } else if (this.state.viewed.length === 0) {
      return <CharacterCard handleClick={this.handleClick} character={this.renderFirstCharacter()} streak={this.state.viewed.length} />
    } else {
      return <CharacterCard handleClick={this.handleClick} character={this.renderNextCharacter()} streak={this.state.viewed.length} />
    }
  }

  startGame = () => {
    this.setState({ newGame: false })
  }

  restartGame = () => {
    this.setState({ viewed: [], gameOver: false })
  }

  render() {
    return(
      <div>
        {this.state.characters ? this.selectCharacter() : <div>Loading...</div>}
      </div>
    )
  }
}
