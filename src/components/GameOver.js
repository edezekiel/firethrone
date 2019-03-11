import React, { Component } from 'react'

import { Button, Container, Header, Form, Segment } from 'semantic-ui-react'

// let image = `https://media.giphy.com/media/d97OPMEimWGBi/giphy.gif`

// <iframe title='GOT' width="560" height="315" src="https://www.youtube.com/embed/0MGnIUn30FU?&autoplay=1"
// frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
// allowfullscreen></iframe>

class GameOver extends Component {

  render() {
    return(
      <div style={{"display": "flex", "justify-content": "center", "flex-direction": "column", "height": "80vh"}}>
          <Container textAlign="center" style={{"width": "50%"}}>
            <Segment inverted>
              <Header inverted size="huge"> Final Score: {this.props.streak} </Header>
              <Form inverted onSubmit={(e) => this.props.saveScore(e)}>
                <Header inverted>Please Enter Your Name:</Header>
                <Form.Field>
                  <Form.Input
                    type="text"
                    name="player"
                    value={this.props.player}
                    onChange={this.props.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Button type="submit">Save Score</Button>
                </Form.Field>
              </Form>
            </Segment>
          </Container>
      </div>

    )
  }
}

export default GameOver
