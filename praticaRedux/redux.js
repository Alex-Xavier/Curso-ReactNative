// Action Types
const INCREMENT = 'INCREMENT'
const increment = () => ({
  type: INCREMENT
})

const DECREMENT = 'DECREMENT'
const decrement = () => ({
  type: DECREMENT
})

const reducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
    case DECREMENT:
    default:
      return state
  }
}

const store = Redux.createStore(reducer)