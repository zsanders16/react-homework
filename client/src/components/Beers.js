import React from 'react'
import { connect } from 'react-redux'
import { getAllBeers } from '../actions/beers'
import SingleBeer from './SingleBeer'
import { Container, Grid } from 'semantic-ui-react'
import InfiniteScroll from 'react-infinite-scroller';

class Beers extends React.Component {
  state = { hasMore: true}

  componentDidMount() {
    if(!this.props.beer.data.length){
      this.props.dispatch(getAllBeers())
    }
  }

  displayBeers = () => {
    return this.props.beer.data.map( (beer, i) => {
      return(<SingleBeer key={i} beer={beer} />)
    });
  }


  loadFunc = (e) => {
    let { beer } = this.props
    if(e <= beer.pagination.totalPages){
      this.props.dispatch(getAllBeers(e+1))
    }else{
      this.setState({hasMore: false})
    }
  }

  render() {
    let { hasMore } = this.state
    if(this.props.beer.data.length){
      return(
        <Container>
          <Grid >
            <div style={{height: '700px', overflow: 'auto'}}>
              <Grid.Row columns={3} >
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadFunc}
                    hasMore={hasMore}
                    loader={<div className="loader">Loading ...</div>}
                    useWindow={false}
                >
                    { this.displayBeers() }
                </InfiniteScroll>
              </Grid.Row>
            </div>
          </Grid>
        </Container>
      )
    }else{
      return(
        <p>Nothing to display</p>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return { beer: state.beers,
            breweries: state.brewery }
}

export default connect(mapStateToProps)(Beers);
