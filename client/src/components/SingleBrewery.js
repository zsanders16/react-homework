import React from 'react'
import { Grid, Card, Button, Popup } from 'semantic-ui-react'

class SingleBrewery extends React.Component {
  render(){
    let { brewery } = this.props
    return(
      <Grid.Column>
      <Card style={{margin: '15px'}}>
      <Card.Content>
        <Card.Header style={{height: '50px'}}>
          {brewery.name}
        </Card.Header>
        <Card.Description style={{height: '50px'}}>
          {brewery.website}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Popup
          trigger={<Button>Brewery Description</Button>}
          content={brewery.description}
          basic
        />

      </Card.Content>
    </Card>
    </Grid.Column>
    )
  }
}

export default SingleBrewery;
