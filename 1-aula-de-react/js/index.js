//Parâmetros: React.createElement(tag, propriedades, filhos)
const ourHello = React.createElement("h1", null, "OLÁ!")

const ourHelloWithClass = React.createElement(
  "h1",
  { className: "my-title" },
  "OLÁ!"
)

const ourList = React.createElement(
  "ul",
  null,
  [
    React.createElement("li", { className: "item01" }, "item01"),
    React.createElement("li", { className: "item02" }, "item02"),
    React.createElement("li", { className: "item03" }, "item03"),
  ]
)

const myWrapper = React.createElement(
  "div",
  { className: "my-wrapper" },
  [ourHelloWithClass, ourList]
)

//ReactDOM.render(componente, container)
const container = document.getElementById("app")
ReactDOM.render(myWrapper, container)