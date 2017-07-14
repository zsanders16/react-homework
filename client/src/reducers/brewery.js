const brewery = ( state = [], action) => {
  switch (action.type) {
    case 'SET_BY_BREWERY':
      return action.data
    default:
      return state
  }
}

export default brewery
