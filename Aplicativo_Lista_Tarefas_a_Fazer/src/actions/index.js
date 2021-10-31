export const ADD_TASK = 'ADD_TASK'
export const addTask = text => ({
  type: ADD_TASK,
  text
})

export const TOGGLE_TASK = 'TOGGLE_TASK'
export const toggleTask = taskId => ({
  type: TOGGLE_TASK,
  taskId
})