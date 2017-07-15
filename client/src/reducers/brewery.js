const breweries = ( state = { data: [], pagination: {} }, action) => {
  switch (action.type) {
    case 'SET_ALL_BREWERIES':
      return { data: [...state.data, ...action.data], pagination: action.pagination }
    default:
      return state
  }
}

export default breweries
