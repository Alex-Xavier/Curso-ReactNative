import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'

const StandardContainer = ({ children }) => (
  <>
    <SafeAreaView style={styles.container}>
      <StatusBar />
      {children}
    </SafeAreaView>
  </>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
})

export default StandardContainer