// Deixa a primeira letra de uma palavra em maiúscula
// Ex: alex -> Alex
const capitalizeFirstLetter = string => {
  return string[0].toUpperCase() + string.slice(1)
}

export default capitalizeFirstLetter