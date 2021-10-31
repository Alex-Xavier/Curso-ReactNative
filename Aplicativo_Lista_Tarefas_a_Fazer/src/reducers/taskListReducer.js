import { ADD_TASK, TOGGLE_TASK } from '../actions'

let nextID = 1

const taskListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: nextID++,
        text: action.text,
        done: false
      }
      return [...state, newTask]

    case TOGGLE_TASK:
      return state.map(task => {
        if (task.id === action.taskId)
          return {
            ...task,
            done: !task.done
          }
        return task
      })

    default:
      return state
  }
}

export default taskListReducer