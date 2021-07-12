/*
  Pure Functions / Funções Puras - 2
  -> Immutability / Imutabilidade
  ->> É algo que não muta / muda o estado de qualquer coisa fora dele mesmo
*/

let x = 123


// Função Inpura / Função Mutável
const incrementX = () => {
  return x++
}

// Função Pura / Função Imutável
const immutableIncrement = x => {
  return x + 1
}

/*--------------------------------------------------------------------------------------------*/

/*
  Pure Functions / Funções Puras - 3
  -> Immutability / Imutabilidade
  ->> É algo que não muta / muda o estado de qualquer coisa fora dele mesmo
*/

let state = {
  number: 123,
  name: 'Alex Xavier'
}

// Função Inpura / Função Mutável
const incrementNumber = () => {
  return state.number++
}

// Função Inpura / Função Mutável
const incrementState = stateParameter => {
  return state.number++
}

// Função Pura / Função Imutável
const pureIncrementState = stateParameter => {
  return Object.assign({}, stateParameter, { number: stateParameter.number + 1 })
}