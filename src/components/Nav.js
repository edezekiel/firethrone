import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import { Menu, Header } from 'semantic-ui-react'

class Nav extends Component {

  render(){
    return(
      <Menu style={{"height": "10vh", margin: "0"}}>
        <Menu.Item floated="right">
          <Header>GOT Game?</Header>
        </Menu.Item>
        <Menu.Item floated="right">
          <Header>Leaderboard</Header>
        </Menu.Item>

      </Menu>
    )
  }
}

export default Nav
