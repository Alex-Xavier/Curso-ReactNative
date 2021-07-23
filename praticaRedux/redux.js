// Action Types
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

// Action Creators
const increment = () => ({
  type: INCREMENT
})
const decrement = () => ({
  type: DECREMENT
})

// Reducer Functions
const reducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1

    case DECREMENT:
      return state - 1

    default:
      return state
  }
}

// Store Creator
const store = Redux.createStore(reducer)

// Lib que efetua a integração entre o React e o Redux
const { Provider, connect } = ReactRedux

// Dispatchs | Alterando o State
store.dispatch(increment())
console.log(store.getState())

store.dispatch(increment())
console.log(store.getState())

store.dispatch(increment())
console.log(store.getState())

store.dispatch(descrement())
console.log(store.getState())