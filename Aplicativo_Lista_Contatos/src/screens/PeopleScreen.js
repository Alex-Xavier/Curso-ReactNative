import React from 'react'
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native'

import axios from 'axios'

import { PeopleList } from '../components'

export default class PeopleScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      peoples: [],
      loading: false,
      error: false
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
        }).catch(error => {
          this.setState({
            loading: false,
            error: true
          })
        })
    }, 1500)
  }

  render () {
    return (
      <View style={styles.container}>
        {
          this.state.loading
            ? <ActivityIndicator size='large' color='#6ca2f7' />
            : this.state.error
              ? <Text style={styles.error}>Ops... Algo deu errado =(</Text>
              : <PeopleList
                peoples={this.state.peoples}
                onPressItem={screenParams =>
                  this.props.navigation.navigate('PeopleDetail', screenParams)} />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  error: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 20
  }
})