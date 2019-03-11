import React from 'react'

import { Button, Segment, Header } from 'semantic-ui-react'

let image = `https://media.giphy.com/media/d97OPMEimWGBi/giphy.gif`

const GameOver = (props) => {

  return(
    <Segment>

        <iframe title='GOT' width="560" height="315" src="https://www.youtube.com/embed/0MGnIUn30FU?&autoplay=1"
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>

        <Header inverted size="huge"> Final Score: {props.streak} </Header>

        <Button onClick={() => props.restartGame()}> Restart Game </Button>

    </Segment>

  )
}

export default GameOver
