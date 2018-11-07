import { combineReducers } from 'redux'
import content from './content'
import activeRow from './active-row'
import activeBlock from './active-block'

export default combineReducers({
  content,
  activeRow,
  activeBlock,
})