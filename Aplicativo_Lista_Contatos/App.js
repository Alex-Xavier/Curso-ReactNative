import React from 'react'
import { View, Text } from 'react-native'

import axios from 'axios'

import Header from './src/components/Header'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      peoples: []
    }
  }

  componentDidMount() {
    // Promises
    axios
      .get('https://randomuser.me/api/?nat=br&results=5')
      .then(response => {
        const { results } = response.data
        this.setState({
          peoples: results
        })
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