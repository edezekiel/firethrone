import React, { Component } from 'react'

import { Segment, Container, Header } from 'semantic-ui-react'

class Footer extends Component {

  render(){
    return(
      <Segment inverted style={{"height": "10vh", "line-height": "10vh", "margin": "0", "border-radius": "0"}}>
        <Container textAlign="center">
          <Header inverted style={{"margin-top": "2vh"}}>
            Made with ❤️ by
            <a href='https://github.com/edezekiel'
            target="blank"> Ed</a> and

            <a href='https://github.com/kwamamissah'
            target="blank"> Kwam</a>
          </Header>
        </Container>
      </Segment>
    )
  }
}

export default Footer
