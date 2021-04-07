//Spread Operator
const unidades = [1, 2, 3, 4, 5]
const dezenas = [10, 20, 30, 40, 50]

//Spread Operator faz a junção de arrays de forma simples
const numeros = [...unidades, ...dezenas]

const obj1 = {
  a: 'Olá'
}

const obj2 = {
  b: 'Mundo! '
}

const obj3 = {
  c: 2021
}

//Spread Operator faz a junção de objetos de forma simples
const obj4 = {...obj1, ...obj2, ...obj3}