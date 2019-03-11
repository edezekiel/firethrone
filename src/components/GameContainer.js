import React, { Component } from 'react'

import firestore from '../utils/Firestore'
import firebase from 'firebase'

import CharacterCard from './CharacterCard.js'
import StartGame from './StartGame.js'
import GameOver from './GameOver.js'

export default class GameContainer extends Component {

  state = {
    characters: [],
    viewed: [],
    character: null,
    gameOver: false,
    newGame: true,
    redirect: false,
    player: "Syrio Forel",
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
    let randomNum = this.getRandomInt(characters.length)
    let firstCharacter = characters[randomNum]
    return firstCharacter
  }

  renderNextCharacter = () => {
    let unviewed = this.getUnviewed()
    let randomNum = this.getRandomInt(unviewed.length)
    let nextCharacter = unviewed[randomNum]
    return nextCharacter
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
    } else if (this.state.gameOver || (this.state.viewed.length === this.state.characters.length)) {
      return <GameOver
                player={this.state.player}
                handleChange={this.handleChange}
                restartGame={this.restartGame}
                streak={this.state.viewed.length}
                saveScore={this.saveScore}
                />
    } else if (this.state.viewed.length === 0) {
      return <CharacterCard handleClick={this.handleClick} character={this.renderFirstCharacter()} streak={this.state.viewed.length} />
    } else {
      return <CharacterCard handleClick={this.handleClick} character={this.renderNextCharacter()} streak={this.state.viewed.length} />
    }
  }

  startGame = () => {
    this.setState({ newGame: false })
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  saveScore = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    const userRf = db.collection('players').add({
      player: this.state.player,
      score: this.state.viewed.length
    });

    this.setState({
      player: "",
      viewed: [],
      newGame: true,
      gameOver: false
    });
  }

  render() {
    return(
      <div>
        {this.state.characters ? this.selectCharacter() : <div>Loading...</div>}
      </div>
    )
  }
}
