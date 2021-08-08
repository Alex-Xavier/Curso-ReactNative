import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from '../reducers'
import StandardContainer from '../components/StandardContainer'
import TasksForm from '../components/TasksForm'

const store = createStore(rootReducer)

export default class TasksApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StandardContainer>
          <TasksForm />
        </StandardContainer>
      </Provider>
    )
  }
}