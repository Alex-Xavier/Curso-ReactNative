import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import TasksListItem from './TasksListItem'

const TasksList = ({ tasks }) => (
  <View>
    {tasks.map(
      tasks => <TasksListItem key={tasks.id} tasks={tasks} />
    )}
  </View>
)

const mapStateToProps = state => {
  const { tasks } = state
  return { tasks }
}

export default connect(mapStateToProps)(TasksList)