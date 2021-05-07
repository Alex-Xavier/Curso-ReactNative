import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const PeopleListItem = props => {
  const { people, navigateToPeopleDetail } = props
  const { first, last } = people.name
  
  return (
    <TouchableOpacity onPress={() => navigateToPeopleDetail()}>
      <View style={styles.line}>
        <Image style={styles.avatar} source={{ uri: people.picture.thumbnail }} />

        <Text style={styles.lineText}>
          { `${first} ${last}` }
        </Text>
      </View>
    </TouchableOpacity>
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
    flex: 1,
    marginLeft: 15,
    borderRadius: 50
  }
})

export default PeopleListItem