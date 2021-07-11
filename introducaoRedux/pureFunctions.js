/*
  Pure Functions / Funções Puras
  ->> Dado um conjunto de parâmetros, uma função pura sempre retorna o mesmo resultado
  ->> Uma função pura não produz efeitos colaterais
*/

// Função Pura
const getFive = () => 5

// Função Pura
const addFive = x => x + 5

// Função Inpura
const addRandom = x => x + Math.random()

// Função Inpura
Math.random()

// Função Pura
Math.max(20, 21, 15, 8, 10, 4, 30, 29, 17)