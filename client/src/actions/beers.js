import axios from 'axios'

export const getAllBeers = () => {
  return (dispatch) => {

    axios.get('/api/all_beers')
      .then( (res) => {
        dispatch( {type: 'SET_ALL_BEERS', data: res.data } )
      })
  }
}
