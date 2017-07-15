import axios from 'axios'

export const getAllBeers = (page = 1) => {
  return (dispatch) => {
    axios.get('/api/all_beers?per_page=9?page=1')
      .then( (res) => {
        const { data: beers } = res;
        const totalPages = Math.ceil( beers.total_pages / beers.per_page)
        dispatch( {type: 'SET_ALL_BEERS', data: beers.entries, pagination: { totalPages }} )
      })
  }
}
