import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

import { Line } from '../components'

export default class PeopleDetailScreen extends React.Component {
  render() {
    const { people } = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <Image
          source={{ uri: people.picture.large }}
          style={styles.avatar} />

        <View style={styles.detailContainer}>
          <Line label='E-mail:' content={people.email} />
          <Line label='Cidade:' content={people.location.city} />
          <Line label='Estado:' content={people.location.state} />
          <Line label='Telefone:' content={people.phone} />
          <Line label='Celular:' content={people.cell} />
          <Line label='País:' content={people.nat} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  avatar: {
    aspectRatio: 1
  },
  detailContainer: {
    backgroundColor: '#e2f9ff',
    marginTop: 20,
    elevation: 1
  }
})