import { createStore } from 'redux'

const SET_VALUE = 'SET_VALUE'
const action = {
  type: SET_VALUE,
  value: 50
}

const reducer = (state = 0, action) => {
  if (action.type === SET_VALUE) {
    return action.value
  }

  return state
}

const store = createStore()

const state = store.getState()

store.dispatch(action)