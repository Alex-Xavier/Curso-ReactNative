// React.createElement(tag, props, childrens)
const ourHello = React.createElement('h1', null, 'Hello devs!!')

const ourHelloWithClass = React.createElement(
  'h1',
  {className: 'my-title'},
  'Hello devs!!'
)

const ourList = React.createElement(
  'ul',
  null,
  [
    React.createElement('li', {className: 'Dev-01'}, 'Dev-01'),
    React.createElement('li', {className: 'Dev-02'}, 'Dev-02'),
    React.createElement('li', {className: 'Dev-03'}, 'Dev-03')
  ]
)

const MyWrapper = React.createElement(
  'div',
  {className: 'my-wrapper'},
  [ourHelloWithClass, ourList]
)

const container = document.getElementById('app')

// ReactDOM.render(component, container)
ReactDOM.render(MyWrapper, container)