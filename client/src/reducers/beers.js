const beers = ( state = [], action) => {
  switch (action.type) {
    case 'SET_ALL_BEERS':
      return action.data
    case 'SET_BY_BREWERY':
      return action.data
    default:
      return state
  }
}

export default beers
