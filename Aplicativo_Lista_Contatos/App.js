import React from 'react'
import { View, Text } from 'react-native'

import Header from './src/components/Header'

export default class App extends React.Component {
  renderList() {
    const names = [
      'Pamela',
      'Patricia',
      'Escarlete',
      'Luana'
    ]

    const textElements = names.map((name) => {
      return <Text>{ name }</Text>
    })

    return textElements
  }
  
  render () {
    return (
      <View>
        <Header title='Pessoas!' />
        { this.renderList() }
      </View>
    )
  }
}