import { combineReducers } from 'redux'
import rows from './rows'
import activeRow from './active-row'
import activeBlock from './active-block'

export default combineReducers({
  rows,
  activeRow,
  activeBlock,
})