import React, { Component } from 'react';
import firestore from '../utils/Firestore'
import firebase from 'firebase'

class Users extends Component {
  state = {
    fullname: ""
  };

  updateInput = e => { this.setState({
      [e.target.name]: e.target.value
    });
  }

  addUser = e => {
    e.preventDefault();
    const db = firebase.firestore();
    const userRf = db.collection('users').add({
      fullname: this.state.fullname,
      score: this.state.email
    });

    this.setState({
      fullname: "",
      email: ""
    });
  }

  render() {
    return(
      <form onSubmit={this.addUser}>
        <input
          type="text"
          name="fullname"
          placeholder="Full name"
          onChange={this.updateInput}
          value={this.state.fullname}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={this.updateInput}
          value={this.state.email}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Users
