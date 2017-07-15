const beers = ( state = { data: [], pagination: {} }, action) => {
  switch (action.type) {
    case 'SET_ALL_BEERS':
      return { data: [...state.data, ...action.data], pagination: action.pagination }
    default:
      return state
  }
}

export default beers
