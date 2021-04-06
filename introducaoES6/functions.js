//Function Types

/*Algo importante de se destacar é que as Arrow Funtions não contém contexto e portanto
elas herdam o contexto do escopo onde foram criadas*/

//Named Function
function soma1 (x, y) {
  return x + y
}

//Anonymous Function
var soma2 = function (x, y) {
  return x + y
}

//ES6 - Arrow Function
const soma3 = (x, y) => {
  return x + y
}

//ES6 - Simple Arrow Function
const soma4 = (x, y) => x + y

//ES6 - Array & Map + Simple Arrow Function
const array = [1, 2, 3, 4, 5].map(x => x * 100)