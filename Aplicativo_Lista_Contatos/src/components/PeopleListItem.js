import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const PeopleListItem = props => {
  const { people } = props
  const { first, last } = people.name
  
  return (
    <View style={styles.line}>
      <Image style={styles.avatar} source={{ uri: people.picture.thumbnail }} />

      <Text style={styles.lineText}>
        { `${first} ${last}` }
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#BBB',
    alignItems: 'center',
    flexDirection: 'row'
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 15,
    flex: 7
  },
  avatar: {
    aspectRatio: 1,
    width: 40,
    flex: 1,
    marginLeft: 15,
    borderRadius: 50
  }
})

export default PeopleListItem