import React, { Component } from 'react'

import { Container, Header, List, Segment } from 'semantic-ui-react'

class LeaderBoard extends Component {

  render() {
    return(
      <Container textAlign="center" style={{"padding-top": "10vh", "width": "50%"}}>
        <Segment inverted>
          <Header inverted as="h1">Top Scores</Header>
          <List animated inverted divided relaxed size="massive" verticalAlign="middle">
            <List.Item>
              <List.Content floated="left">Ed</List.Content>
              <List.Content floated='right'>
                Score
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Content floated="left">Bob</List.Content>
              <List.Content floated='right'>
                Score
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Content floated="left">Barry</List.Content>
              <List.Content floated='right'>
                Score
              </List.Content>
            </List.Item>
          </List>
          </Segment>
      </Container>

    )
  }
}

export default LeaderBoard
