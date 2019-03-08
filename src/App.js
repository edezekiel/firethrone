import React, { Component } from 'react';
import Characters from './Characters'
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAYWbt8vq9P4zGU5PknVFQ8-Twm7W_ILNQ",
    authDomain: "firethrone-ce9cd.firebaseapp.com",
    databaseURL: "https://firethrone-ce9cd.firebaseio.com",
    projectId: "firethrone-ce9cd",
    storageBucket: "firethrone-ce9cd.appspot.com",
    messagingSenderId: "385660047741"
  };

firebase.initializeApp(config);

const db = firebase.database();

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>FireThrone</h1>
      </div>
    );
  }
}

export default App;
