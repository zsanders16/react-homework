import axios from 'axios'

export const getAllBreweries = () => {
  return (dispatch) => {
    axios.get('/api/all_breweries?per_page=9?page=1')
      .then( (res) => {
        const { data: breweries } = res;
        const totalPages = Math.ceil( breweries.total_pages / breweries.per_page)
        dispatch( {type: 'SET_ALL_BREWERIES', data: breweries.entries, pagination: { totalPages }} )
      })
  }
}
