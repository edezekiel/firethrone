import React, { Component } from 'react';

import { Container } from 'semantic-ui-react'
import GameContainer from './components/GameContainer.js'

let image = "http://watchersonthewall.com/wp-content/uploads/2016/11/game-of-thrones.jpeg"

const mainBg = {
  background: `url(${image})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh'
}

class App extends Component {


  render() {
    return (
      <div style={ mainBg }>
        <GameContainer />
      </div>
    );
  }
}

export default App;
