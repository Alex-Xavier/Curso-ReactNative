import React from 'react'

import StandardContainer from '../components/StandardContainer'
import TodoForm from '../components/TodoForm'

export default class TodoApp extends React.Component {
  render() {
    return (
      <StandardContainer>
        <TodoForm />
      </StandardContainer>
    )
  }
}