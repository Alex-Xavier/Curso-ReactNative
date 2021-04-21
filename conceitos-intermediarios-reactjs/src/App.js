import React from 'react'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      contador: 0,
      nome: 'Alex Xavier'
    }
  }

  render() {
    setTimeout(() => {
      this.setState({
        contador: this.state.contador + 1
      })
    }, 1000)

    return (
      <div>
        <Contador valor={this.state.contador} />
        <h2>{ this.state.nome }</h2>
      </div>
    )
  }
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