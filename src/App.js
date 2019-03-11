import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom'

import { Container } from 'semantic-ui-react'
import GameContainer from './components/GameContainer.js'
import LeaderBoard from './components/LeaderBoard.js'

import Nav from './components/Nav'
import Footer from './components/Footer'

let image = "http://watchersonthewall.com/wp-content/uploads/2016/11/game-of-thrones.jpeg"

const mainBg = {
  background: `url(${image})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '80vh'
}

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <div style={ mainBg }>
            <Route exact path='/' component={GameContainer}/>
            <Route exact path='/leaderboard' component={LeaderBoard}/>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
