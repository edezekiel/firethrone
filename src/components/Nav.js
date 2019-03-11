import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import { Menu, Header } from 'semantic-ui-react'

class Nav extends Component {

  render(){
    return(
      <Menu inverted style={{"height": "10vh", "margin": "0", "border-radius": "0"}}>
        <Menu.Item floated="right">
          <Header inverted>GOT Game?</Header>
        </Menu.Item>
        <Menu.Item floated="right">
          <Header inverted>Leaderboard</Header>
        </Menu.Item>
      </Menu>
    )
  }
}

export default Nav
