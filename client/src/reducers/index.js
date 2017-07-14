import { combineReducers } from 'redux'
import flash from './flash'
import beers from './beers'
import brewery from './brewery'

const rootReducer = combineReducers({
  flash,
  beers,
  brewery,
})

export default rootReducer
