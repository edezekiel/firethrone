import React, { Component } from 'react';
import { Segment, Container } from 'semantic-ui-react'

import GameContainer from './components/GameContainer.js'

class App extends Component {

  render() {
    return (
      <Container>
        <Segment inverted>
          <GameContainer />
        </Segment>
      </Container>
    );
  }
}

export default App;
