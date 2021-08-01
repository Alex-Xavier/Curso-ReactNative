import React from 'react'

import StandardContainer from '../components/StandardContainer'
import TasksForm from '../components/TasksForm'

export default class TasksApp extends React.Component {
  render() {
    return (
      <StandardContainer>
        <TasksForm />
      </StandardContainer>
    )
  }
}