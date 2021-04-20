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
        <h1>{ this.state.contador }</h1>
        <h2>{ this.state.nome }</h2>
      </div>
    )
  }
}

export default App