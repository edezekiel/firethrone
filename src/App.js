import React, { Component } from 'react';
import Characters from './Characters'
import { Segment, Container } from 'semantic-ui-react'

class App extends Component {

  render() {
    return (
      <Container>
        <Segment inverted>
        <Characters />
        </Segment>
      </Container>
    );
  }
}

export default App;
