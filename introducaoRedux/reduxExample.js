import { createStore } from 'redux'

const reducer = () => 123

const store = createStore()

const state = store.getState()

const action = {
  type: 'SET_VALUE',
  value: 50
}

store.dispatch(action)