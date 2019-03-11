import React, { Component } from 'react'

import { Segment, Container, Header, Icon, List } from 'semantic-ui-react'

class Footer extends Component {

  render(){
    return(
      <Segment vertical inverted padded>
        <Container textAlign="center">
            <List horizontal relaxed>
              <List.Item>
                <a href="https://github.com/edezekiel" target="_blank">
                  <Icon name="github" link size="big"></Icon>
                </a>
              </List.Item>
              <List.Item>
                <a href="https://twitter.com/EdwardAEzekiel" target="_blank">
                  <Icon name="twitter" link size="big"></Icon>
                </a>
              </List.Item>
              <List.Item>
                <a href="https://www.linkedin.com/in/edezekiel/" target="_blank">
                  <Icon name="linkedin" link size="big"></Icon>
                </a>
              </List.Item>
              <List.Item>
                <a href="https://medium.com/@ed.a.ezekiel" target="_blank">
                  <Icon name="medium m" link size="big"></Icon>
                </a>
              </List.Item>
            </List>
        </Container>
      </Segment>
    )
  }
}

export default Footer
