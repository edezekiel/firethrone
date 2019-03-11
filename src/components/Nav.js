import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import { Menu, Header, Segment, Container, Image } from 'semantic-ui-react'

class Nav extends Component {

  render(){
    return(
      <Segment inverted style={{"height": "10vh", "margin": "0", "border-radius": "0"}}>
        <Container>
          <Menu inverted>
            <Menu.Item>
              <Header inverted>GOT Game?</Header>
            </Menu.Item>
            <Menu.Item>
              <Header inverted>Leaderboard</Header>
            </Menu.Item>
          </Menu>
        </Container>
      </Segment>
    )
  }
}

export default Nav
