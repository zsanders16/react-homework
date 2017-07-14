import React from 'react'

class SingleBeer extends React.Component {
  render(){
    let { beer } = this.props
    return(
      <p style={{ color: 'white'}}>{beer.name_display}</p>
    )
  }
}

export default SingleBeer;
