import React, { Component } from 'react'
import firebase from 'firebase'
import { Container, Header, List, Segment } from 'semantic-ui-react'

class LeaderBoard extends Component {
  state = {
    players: []
  }

  componentDidMount() {
    this.getPlayers()
  }

  getPlayers = () => {
    const db = firebase.firestore();
    db.collection('players').get()
    .then(res => res.docs.forEach((el) => {
        this.setState({ players: [...this.state.players, el.data()]})
    }))
  }

  render() {
    return(
      <Container textAlign="center" style={{"padding-top": "10vh", "width": "50%"}}>
        <Segment inverted>

          {this.state.players.length ?
          <div>
            <Header inverted as="h1">Top Scores:</Header>
            {this.state.players.sort((a, b) => a.score < b.score ? 1 : -1).map((player) =>
              <List animated inverted divided relaxed size="massive" verticalAlign="middle">
                <List.Item>
                  <List.Content floated="left">{player.player}</List.Content>
                  <List.Content floated='right'>
                    {player.score}
                  </List.Content>
                </List.Item>
              </List>
            )}
          </div>

          : null
          }
          </Segment>
      </Container>

    )
  }
}

export default LeaderBoard
