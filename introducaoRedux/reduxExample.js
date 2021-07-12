import { createStore } from 'redux'

const reducer = (state = 0, action) => {
  if (action.type === 'SET_VALUE') {
    return action.value
  }

  return state
}

const store = createStore()

const state = store.getState()

const action = {
  type: 'SET_VALUE',
  value: 50
}

store.dispatch(action)