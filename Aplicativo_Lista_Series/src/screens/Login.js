import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

import FormRow from '../components/FormRow'

const Login = () => {
  return (
    <>
      <FormRow>
        <TextInput
          style={styles.input}
          placeholder='usuário@email.com'
        />
      </FormRow>

      <FormRow>
        <TextInput
          style={styles.input}
          placeholder='********'
          secureTextEntry
        />
      </FormRow>
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5
  }
})

export default Login