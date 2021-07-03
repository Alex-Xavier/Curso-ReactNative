import React from 'react'
import { View, TextInput, Button, ActivityIndicator, Text, StyleSheet } from 'react-native'

import firebase from '@firebase/app'
import '@firebase/auth'

import FormRow from '../components/FormRow'

export default class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mail: '',
      password: '',
      isLoading: false,
      message: ''
    }
  }

  componentDidMount() {
    // Inicialização do Firebase
    if (firebase.apps.length === 0) {
      firebase.initializeApp({
        apiKey: 'AIzaSyCM5PJPY4GuZrysl6jTSQKf_FU5UrwvNKk',
        authDomain: 'aplicativo-lista-de-series.firebaseapp.com',
        projectId: 'aplicativo-lista-de-series',
        storageBucket: 'aplicativo-lista-de-series.appspot.com',
        messagingSenderId: '69811575936',
        appId: '1:69811575936:web:f9774b4d568557c3c5da65'
      })
    }
  }

  onChangeHandler(field, value) {
    this.setState({
      [field]: value
    })
  }

  getMessageByErrorCode(errorCode) {
    switch (errorCode) {
      case 'auth/wrong-password':
        return 'Senha incorreta! Por favor digite a senha novamente com atenção.'

      case 'auth/user-not-found':
        return 'E-mail não encontrado em nossa base! Por favor revise o e-mail inserido com atenção.'

      default:
        return 'Ocorreu um erro não esperado! Por favor tente mais tarde.'
    }
  }

  tryLogin() {
    this.setState({ isLoading: true, message: '' })

    const { mail, password } = this.state

    firebase
      .auth()
      .signInWithEmailAndPassword(mail, password)
      .then(user => {
        this.setState({ message: 'Sucesso!' })
      })
      .catch(error => {
        this.setState({
          message: this.getMessageByErrorCode(error.code)
        })
      })
      .then(() => this.setState({ isLoading: false }))
  }

  render() {
    return (
      <View style={styles.container}>
        <FormRow first>
          <TextInput
            style={styles.input}
            placeholder='usuário@email.com'
            value={this.state.mail}
            onChangeText={value => this.onChangeHandler('mail', value)}
          />
        </FormRow>

        <FormRow last>
          <TextInput
            style={styles.input}
            placeholder='********'
            secureTextEntry
            value={this.state.password}
            onChangeText={value => this.onChangeHandler('password', value)}
          />
        </FormRow>

        {
          this.state.isLoading ?
            <ActivityIndicator size='large' color='#6ca2f7' />
          :
            <Button
              title='Entrar'
              onPress={() => this.tryLogin()}
            />
        }

        {
          this.state.message ?
            <View>
              <Text>{this.state.message}</Text>
            </View>
          :
            null
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
  input: {
    paddingHorizontal: 5,
    paddingBottom: 5
  }
})