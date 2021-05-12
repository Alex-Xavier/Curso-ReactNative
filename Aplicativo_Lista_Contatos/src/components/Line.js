import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const Line = ({ label = '', content = 'Não encontrado' }) => {
  const { line, cell, labelStyle, contentStyle, longLabel } = styles

  return (
    <View style={line}>
      <Text style={[
        cell,
        labelStyle,
        label.length > 9 ? longLabel : null
        ]}>{ label }</Text>
      
      <Text style={[
        cell,
        contentStyle
      ]}>{ content }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    paddingTop: 3,
    paddingBottom: 3,
    borderWidth: 1,
    borderColor: '#C5C5C5'
  },
  cell: {
    fontSize: 18,
    paddingLeft: 5
  },
  labelStyle: {
    fontWeight: 'bold',
    flex: 1
  },
  contentStyle: {
    flex: 3
  },
  longLabel: {
    fontSize: 12
  }
})

export default Line