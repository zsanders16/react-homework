import React from 'react'
import { connect } from 'react-redux'
import { getAllBeers } from '../actions/beers'
import SingleBeer from './SingleBeer'

class Beers extends React.Component {

  componentDidMount() {
    if(!this.props.beers.length){
      this.props.dispatch(getAllBeers())
    }
  }

  displayBeers = () => {
    return this.props.beers.map( (beer, i) => {
      return(<SingleBeer key={i} beer={beer} />)
    });
  }

  render() {
    return(
      <div>
        { this.displayBeers() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { beers: state.beers}
}

export default connect(mapStateToProps)(Beers);
