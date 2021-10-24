import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const TasksListItem = ({ tasks }) => (
  <TouchableOpacity onPress={() => {}}>
    <View style={styles.line}>
      <Text style={styles.lineText}>
        { tasks.text }
      </Text>
    </View>
  </TouchableOpacity>
)

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

export default TasksListItem