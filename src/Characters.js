import React, { Component } from 'react';
import firestore from './Firestore'
import firebase from 'firebase'
import CharacterList from './CharacterList'

class Characters extends Component {
  state = {
    fullname: "",
    image: "",
    alive: ""
  };

  updateInput = e => { this.setState({
      [e.target.name]: e.target.value
    });
  }

  addCharacter = e => {
    e.preventDefault();
    const db = firebase.firestore();
    const userRf = db.collection('characters').add({
      fullname: this.state.fullname,
      image: this.state.image,
      alive: this.state.alive,
    });

    this.setState({
      fullname: "",
      image: "",
      alive: ""
    });
  }

  uploadCharacterList = function() {
    const db = firebase.firestore();
    CharacterList.forEach((el) => {
      db.collection('characters').add({
        name: el.name,
        image: el.image,
        alive: el.alive,
      })
    })
  }

  render() {
    this.uploadCharacterList()
    return(
      <form onSubmit={this.addCharacter}>
        <input
          type="text"
          name="fullname"
          placeholder="Full name"
          onChange={this.updateInput}
          value={this.state.fullname}
        />
        <input
          type="text"
          name="image"
          placeholder="Image"
          onChange={this.updateInput}
          value={this.state.image}
        />
        <input
          type="text"
          name="alive"
          placeholder="Alive"
          onChange={this.updateInput}
          value={this.state.alive}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}
export default Characters
