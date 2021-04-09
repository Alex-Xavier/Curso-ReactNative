// React.createElement(tag, props, childrens)
const ourTitle = React.createElement('h1', null, 'Hello World!!')

const container = document.getElementById('app')

// ReactDOM.render(component, container)
ReactDOM.render(ourTitle, container)