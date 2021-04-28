import React from 'react'
import { View, Text } from 'react-native'

import axios from 'axios'

import Header from './src/components/Header'

export default class App extends React.Component {
  renderList() {

    // Promises
    axios
      .get('https://randomuser.me/api/?nat=br&results=5')
      .then(response => {
        const { results } = response.data
        const name = results.map(people => people.name.first)
      })
  }
  
  render () {
    return (
      <View>
        <Header title='Pessoas!' />
      </View>
    )
  }
}