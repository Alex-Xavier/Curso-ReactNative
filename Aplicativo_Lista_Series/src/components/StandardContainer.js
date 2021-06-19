import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'

const StandardContainer = ({ children }) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar />

        {children}
      </SafeAreaView>
    </>
  )
}

export default StandardContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
})