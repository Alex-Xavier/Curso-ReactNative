import { ADD_TASK } from '../actions'

const taskListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        text: action.text
      }
      return [...state, newTask]

    default:
      return state
  }
}

export default taskListReducer