import React from 'react'
import { View, ActivityIndicator } from 'react-native'

import axios from 'axios'

import { PeopleList } from '../components'

export default class PeopleScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      peoples: [],
      loading: false
    }
  }

  componentDidMount() {
    this.setState({ loading: true })

    setTimeout(() => {
      axios
        .get('https://randomuser.me/api/?nat=br&results=1000')
        .then(response => {
          const { results } = response.data
          this.setState({
            peoples: results,
            loading: false
          })
        })
    }, 1500)
  }

  render () {
    return (
      <View>
        {
          this.state.loading
            ? <ActivityIndicator size='large' color='#6ca2f7' />
            : null
        }

        <PeopleList
          peoples={this.state.peoples}
          onPressItem={screenParams => this.props.navigation.navigate('PeopleDetail', screenParams)} />
      </View>
    )
  }
}