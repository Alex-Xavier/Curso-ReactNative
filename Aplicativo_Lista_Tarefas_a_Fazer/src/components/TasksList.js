import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

const TasksList = ({ tasks }) => (
  <View>
    {tasks.map(
      tasks => <Text key={tasks.id}>{tasks.text}</Text>
    )}
  </View>
)

const mapStateToProps = state => {
  const { tasks } = state
  return { tasks }
}

export default connect(mapStateToProps)(TasksList)