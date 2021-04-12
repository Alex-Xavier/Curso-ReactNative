/* React.createElement(tag, props, childrens)
const ourHello = React.createElement('h1', null, 'Hello devs!!')

const ourHelloWithClass = React.createElement(
  'h1',
  {className: 'my-title'},
  'Hello devs!!'
)*/

class OurHelloWithClass extends React.Component {
  render() {
    return(
      <h1 className='my-title'>Hello devs!!</h1>
    )
  }
}

/*const ourList = React.createElement(
  'ul',
  null,
  [
    React.createElement('li', {className: 'Dev-01'}, 'Dev-01'),
    React.createElement('li', {className: 'Dev-02'}, 'Dev-02'),
    React.createElement('li', {className: 'Dev-03'}, 'Dev-03')
  ]
)*/

class OurList extends Rect.Component {
  render() {
    return(
      <ul>
        <li className='dev-01'>dev-01</li>
        <li className='dev-02'>dev-02</li>
        <li className='dev-03'>dev-03</li>
      </ul>
    )
  }
}

/*const myWrapper = React.createElement(
  'div',
  {className: 'my-wrapper'},
  [<OurHelloWithClass />, <OurList />]
)*/

class MyWrapper extends Recat.Component {
  render() {
    return(
      <div className='my-wrapper'>
        <OurHelloWithClass />
        <OurList />
      </div>
    )
  }
}

const container = document.getElementById('app')

// ReactDOM.render(component, container)
ReactDOM.render(<MyWrapper />, container)