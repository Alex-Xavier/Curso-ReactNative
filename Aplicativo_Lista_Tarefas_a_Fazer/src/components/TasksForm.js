import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

import Input from './Input'

export default class TasksForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  onChangeText(text) {
    this.setState({ text })
  }
  
  onPress() {
    console.log(this.state.text)
  }

  render() {
    const { text } = this.state

    return (
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Input
            onChangeText={text => this.onChangeText(text)}
            value={text}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title='Salvar'
            onPress={() => this.onPress()}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row'
  },
  inputContainer: {
    flex: 4
  },
  buttonContainer: {
    flex: 1
  }
})