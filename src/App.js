import React, { Component } from 'react';

import { Container } from 'semantic-ui-react'
import GameContainer from './components/GameContainer.js'

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
      <Container >
        <Nav />
        <div style={ mainBg }>
          <GameContainer/>
        </div>
        <Footer />
      </Container>
    );
  }
}

export default App;
