import axios from 'axios'

export const getBeersByBrewery = () => {
  return (dispatch) => {
    axios.get('/api/all_breweries')
    .then( (res) => {
      dispatch( { type: "SET_BY_BREWERY", data: res.data })
    })
  }
}
