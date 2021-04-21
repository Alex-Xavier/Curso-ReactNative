import React from 'react'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      contador: 0
    }
  }

  onClickHandler() {
    this.setState({
      contador: this.state.contador + 1
    })
  }

  render() {
    return (
      <div>
        <Contador valor={this.state.contador} />
        <Button
          label='Adicionar'
          onClick={() => this.onClickHandler()} />
        <Button
          label='Escreve no console'
          onClick={() => console.log('Olá!!')} />
      </div>
    )
  }
}

//Functional Component
// Componentização de <button onClick={() => this.onClickHandler()}>Adicionar</button>
const Button = (props) => {
  <div>
    <button onClick={() => props.onClick()}>{ props.label }</button>
  </div>
}

//Functional Component
const Contador = (props) => {
  return(
    <div>
      <h1>{ props.valor }</h1>
    </div>
  )
}

/*class Contador extends React.Component {
  render() {
    return (
      <div>
        <h1>{ this.props.valor }</h1>
      </div>
    )
  }
}*/

export default App