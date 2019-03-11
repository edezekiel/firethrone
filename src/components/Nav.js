import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Menu, Header, Segment, Container, Image } from 'semantic-ui-react'

class Nav extends Component {

  render(){
    return(
      <Segment inverted style={{"height": "10vh", "margin": "0", "border-radius": "0"}}>
        <Menu inverted>
          <Container>
            <Menu.Item>
              <Link to="/"><Header inverted>GOT Game?</Header></Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/leaderboard"><Header inverted>Leaderboard</Header></Link>
            </Menu.Item>
          </Container>
        </Menu>
      </Segment>
    )
  }
}

export default Nav
