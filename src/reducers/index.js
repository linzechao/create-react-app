import { combineReducers } from 'redux'

import main from './main'
import user from './user'

const m3app = combineReducers({
  main,
  user
})

export default m3app
