import React from 'react'

import { Button, Container, Segment } from 'semantic-ui-react'

let image = `http://www.gstatic.com/tv/thumb/tvbanners/14160794/p14160794_b_v8_aa.jpg`

const StartGame = (props) => {

  return(
    <Segment>
      <Container className='style' textAlign='center'>
        <a href="https://fontmeme.com/game-of-thrones-font/">
          <img src="https://fontmeme.com/permalink/190125/a8bd38f5791d4f59320926097af652f6.png"
          alt="game-of-thrones-font" border="0" /></a>
        <br />
        <Button onClick={() => props.startGame()}>Start Game</Button>
      </Container>
  </Segment>
  )


}

export default StartGame
