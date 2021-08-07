import { combineReducers } from 'redux'

import taskListReducer from './taskListReducer'

const rootReducer = combineReducers({
  todos: taskListReducer
})

export default rootReducer