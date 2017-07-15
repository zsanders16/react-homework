import React from 'react'
import { Grid, Card, Button, Popup, Segment, Header, Image } from 'semantic-ui-react'

class SingleBeer extends React.Component {

  displayDetails = () => {
    let {beer } = this.props
    let beerGlass = 'N/A'
    let beerAvailability = 'N/A'
    let beerStyleName = 'N/A'
    let beerStyleDescription = 'N/A'
    let beerLabel

    if(beer.glass){
      beerGlass = beer.glass.name
    }
    if(beer.availability){
      beerAvailability = beer.availability.name
    }
    if(beer.labels){
      beerLabel = beer.labels.icon
    }
    if(beer.style){
      beerStyleName = beer.style.name
      beerStyleDescription = beer.style.description }

    return(
      <Segment basic>
        <Header as='h3'>{beer.name} Description <Image src={beerLabel} size='small' /></Header>
        <p>Glass: {beerAvailability}</p>
        <p>Glass: {beerGlass}</p>
        <p>Category: {beerStyleName}</p>
        <p>Category description: {beerStyleDescription}</p>
      </Segment>
    )
  }

  render(){
    let { beer } = this.props


    return(
      <Grid.Column>
        <Card style={{margin: '15px'}}>
        <Card.Content>
          <Card.Header style={{height: '50px'}}>
            {beer.name}
          </Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Popup
            size='huge'
            position='top right'
            wide='very'
            trigger={<Button>Beer Description</Button>}
            content={this.displayDetails()}
            basic
          />
      </Card.Content>
    </Card>
    </Grid.Column>
    )
  }
}

export default SingleBeer;
