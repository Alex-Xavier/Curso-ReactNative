import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Aplicativo Lista de Séries!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App