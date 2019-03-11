import React, { Component } from 'react'

import CharacterContainer from './CharacterContainer.js'
import { Segment } from 'semantic-ui-react'

let image = `https://media.giphy.com/media/d97OPMEimWGBi/giphy.gif`

export default class GameContainer extends Component {

  render() {
    return(
      <Segment>
        <CharacterContainer />
      </Segment>
    )
  }
}
