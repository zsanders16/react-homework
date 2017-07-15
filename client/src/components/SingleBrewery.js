import React from 'react'
import { Grid, Card, Button, Popup, Segment, Header, Image } from 'semantic-ui-react'

class SingleBrewery extends React.Component {


    displayDetails = () => {
      let { brewery } = this.props
      let breweryDescription = 'N/A'
      let breweryEstablished = 'N/A'
      let breweryIcon

      if(brewery.description){
        breweryDescription = brewery.description
      }
      if(brewery.images){
        breweryIcon = brewery.images.large
      }
      if(brewery.established){
        breweryEstablished = brewery.established
      }



      return(
        <Segment>
          <Header as='h3'>Brewery Name: {brewery.name} <Image src={breweryIcon} size='massive'/></Header>
          <p>Brewery Established: {breweryEstablished}</p>
          <p>Brewery Description: {breweryDescription}</p>
        </Segment>
      )
    }


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
          size='huge'
          position='top right'
          wide='very'
          trigger={<Button>Brewery Description</Button>}
          content={this.displayDetails()}
          basic
        />

      </Card.Content>
    </Card>
    </Grid.Column>
    )
  }
}

export default SingleBrewery;
