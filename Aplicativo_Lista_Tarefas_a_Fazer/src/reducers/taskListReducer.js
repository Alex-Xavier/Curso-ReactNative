import { ADD_TASK } from '../actions'

let nextID = 1

const taskListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: nextID++,
        text: action.text
      }
      return [...state, newTask]

    default:
      return state
  }
}

export default taskListReducer