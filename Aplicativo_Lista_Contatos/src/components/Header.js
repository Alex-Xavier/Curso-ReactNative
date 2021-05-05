import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = props => (
  <View style={style.container}>
    <Text style={style.title}>{ props.title }</Text>
  </View>
)

export default Header;

style = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#6ca2f7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 50,
    color: '#FFF'
  }
})