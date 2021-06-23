import React from 'react'
import { TextInput, Button, StyleSheet } from 'react-native'

import FormRow from '../components/FormRow'

export default class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mail: '',
      password: ''
    }
  }

  onChangeHandler(field, value) {
    this.setState({
      [field]: value
    })
  }

  tryLogin() {
    console.log(this.state)
  }

  render() {
    return (
      <>
        <FormRow>
          <TextInput
            style={styles.input}
            placeholder='usuário@email.com'
            value={this.state.mail}
            onChangeText={value => this.onChangeHandler('mail', value)}
          />
        </FormRow>

        <FormRow>
          <TextInput
            style={styles.input}
            placeholder='********'
            secureTextEntry
            value={this.state.password}
            onChangeText={value => this.onChangeHandler('password', value)}
          />
        </FormRow>

        <Button
          title='Entrar'
          onPress={() => this.tryLogin()}
        />
      </>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5
  }
})