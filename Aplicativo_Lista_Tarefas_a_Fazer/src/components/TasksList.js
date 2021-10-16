import React from 'react'
import { View } from 'react-native'

const TasksList = ({ tasks = [] }) => (
  <View>
    {tasks.map(
      tasks => <Text key={tasks.id}>{tasks.text}</Text>
    )}
  </View>
)

export default TasksList