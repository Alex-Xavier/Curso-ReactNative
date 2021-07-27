import React from 'react'
import { Text } from 'react-native'

import StandardContainer from '../components/StandardContainer'

export default class TodoApp extends React.Component {
  render() {
    return (
      <StandardContainer>
        <Text>Todo App</Text>
      </StandardContainer>
    )
  }
}