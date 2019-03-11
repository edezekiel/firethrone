import React from 'react'

import { Button, Container, Segment } from 'semantic-ui-react'

// let image = `http://www.gstatic.com/tv/thumb/tvbanners/14160794/p14160794_b_v8_aa.jpg`

const StartGame = (props) => {
  return(
    <Container textAlign="center" style={{"height": "100vh", "line-height": "100vh"}}>
      <Button onClick={() => props.startGame()}>Start Game</Button>
    </Container>
  )
}

export default StartGame
