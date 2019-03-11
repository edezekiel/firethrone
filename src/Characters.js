import React, { Component } from 'react';
import firestore from './Firestore'
import firebase from 'firebase'

class Characters extends Component {
  getCharacters = function() {
    const db = firebase.firestore();
    db.collection('characters').get()
    .then(res => res.docs.forEach((el) => {
      console.log(el.data())
    }))
  }

  render() {
    return(
      <button onClick={() => this.getCharacters()}>Get Characters</button>
    )
  }
}
export default Characters
