import React from 'react'
import { View } from 'react-native'

import axios from 'axios'

import { Header, PeopleList } from '../components'

export default class PeopleScreen extends React.Component {
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
        <PeopleList peoples={this.state.peoples} />
      </View>
    )
  }
}