import React from 'react'
import { Grid, Card, Button, Popup } from 'semantic-ui-react'

class SingleBeer extends React.Component {
  render(){
    let { beer } = this.props
    return(
      <Grid.Column>
      <Card style={{margin: '15px'}}>
      <Card.Content>
        <Card.Header style={{height: '50px'}}>
          {beer.name}
        </Card.Header>
        <Card.Description style={{height: '50px'}}>
          {beer.website}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Popup
          trigger={<Button>Brewery Description</Button>}
          content={beer.description}
          basic
        />

      </Card.Content>
    </Card>
    </Grid.Column>
    )
  }
}

export default SingleBeer;
