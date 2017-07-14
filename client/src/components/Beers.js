import React from 'react'
import { connect } from 'react-redux'
import { getAllBeers } from '../actions/beers'
import { getBeersByBrewery } from '../actions/brewery'
import SingleBeer from './SingleBeer'
import SingleBrewery from './SingleBrewery'
import { Container, Grid, Button } from 'semantic-ui-react'

class Beers extends React.Component {
  state = { viewState: 'all'}

  componentDidMount() {
    if(!this.props.beers.length){
      this.props.dispatch(getAllBeers())
    }
    if(!this.props.breweries.length){
      this.props.dispatch(getBeersByBrewery())
    }
  }

  displayBeers = () => {
    return this.props.beers.map( (beer, i) => {
      return(<SingleBeer key={i} beer={beer} />)
    });
  }


  displayBrewery = () => {
    return this.props.breweries.map( (brewery, i) => {
      return(<SingleBrewery key={i} brewery={brewery} />)
    });
  }

  setView = (view) => {
    this.setState({viewState: view})
  }

  displayButtons = () => {
    return (

      <Button.Group>
        <Button onClick={ () => this.setView('all')}>All</Button>
        <Button onClick={ () => this.setView('brewery')} >All Brewery</Button>
      </Button.Group>

    )
  }

  render() {
    return(
      <Container>
        <Grid >
          <Grid.Row centered columns={4} >
            <Grid.Column>
              { this.displayButtons()}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
          { this.state.viewState === 'all' ? this.displayBeers() : this.displayBrewery() }
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { beers: state.beers, breweries: state.brewery }
}

export default connect(mapStateToProps)(Beers);
