import { createStore } from 'redux'

const SET_VALUE = 'SET_VALUE'
// Action Creators / Criador de Ações
const setValue = value => ({
  type: SET_VALUE,
  value
})

const DECREMENT_VALUE = 'DECREMENT_VALUE'
// Action Creators / Criador de Ações
const decrementValue = (decrement = 1) => ({
  type: DECREMENT_VALUE,
  decrement
})

/*
  Reducer - Função pura
  Parâmetros: state, action
  Retorno: newState
*/
const reducer = (state = 0, action) => {
  switch (action.type) {
    case SET_VALUE:
      return action.value
    case DECREMENT_VALUE:
      return state - action.decrement
    default:
      return state
  }
}

const store = createStore(reducer)

/*
  O subscribe é um método que é chamado sempre que o state é alterado na store do Redux
  É quase que um observador
*/
store.subscribe(() => {
  store.getState()
})

store.dispatch(setValue(50))
store.dispatch(setValue(100))

store.dispatch(decrementValue(5))
store.dispatch(decrementValue())

const state = store.getState()