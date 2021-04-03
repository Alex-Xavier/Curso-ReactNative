class OurHelloWhitClass extends React.Component {
  render () {
    return (
      <h1 className="my-title">Olá!</h1>
    );
  }
}

class OurList extends React.Component {
  render () {
    return (
      <ul>
        <li className="item-01">item 01</li>
        <li className="item-02">item 02</li>
        <li className="item-03">item 03</li>
      </ul>
    );
  }
}

class MyWrapper extends React.Component {
  render () {
    return (
      <div className='my-wrapper'>
        <OurHelloWithClass/>
        <OurList/>
      </div>
    );
  }
}

//ReactDOM.render(componente, container)
const container = document.getElementById("app")
ReactDOM.render(<MyWrapper/>, container)