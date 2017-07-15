import React from 'react'
import { connect } from 'react-redux'
import { getAllBreweries } from '../actions/brewery'
import SingleBrewery from './SingleBrewery'
import { Container, Grid } from 'semantic-ui-react'
import InfiniteScroll from 'react-infinite-scroller';

class Brewery extends React.Component {
  state = { hasMore: true }

  componentDidMount() {
    if(!this.props.brewery.data.length){
      this.props.dispatch(getAllBreweries())
    }
  }


  displayBrewery = () => {
    return this.props.brewery.data.map( (brewery, i) => {
      return(<SingleBrewery key={i} brewery={brewery} />)
    });
  }


  loadFunc = (e) => {
    let { brewery } = this.props
    if(e <= brewery.pagination.totalPages){
      this.props.dispatch(getAllBreweries(e+1))
    }else{
      this.setState({hasMore: false})
    }
  }

  render() {
    let { hasMore } = this.state
    if(this.props.brewery.data.length){
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
                    { this.displayBrewery() }
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
  return { brewery: state.brewery }
}

export default connect(mapStateToProps)(Brewery);
