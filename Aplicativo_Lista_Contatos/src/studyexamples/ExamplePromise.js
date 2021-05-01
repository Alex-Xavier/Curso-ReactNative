/*
Status Types of Promise
- Resolved
- Rejected
- Pending...
*/

/*
new Promise()

setTimeout(() => {
  console.log('Acabou o setTimeout')
}, 2000)
*/


/*
Promise( callback )
*/

// getDataFromServer:: String -> Promise
function getDataFromServer(url) {
  console.log('Função getDataFromServer está sendo executada')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Ops... Algo deu errado na API, não conseguimos buscar os dados desejados')
      reject({
        error: true,
        errorMessage: 'API não respondeu, ficamos no vácuo :<('
      })
      
      /* console.log('Dados da ' + url)
      resolve ({
        data: 'Dados que queremos'
      }) */
    }, 1500)
  })
}

getDataFromServer('www.api.com')
  .then(data => {
    console.log('Then sendo executado. Data: ', data)
  })
  .catch(error => {
    console.log('Catch sedo executado. Error: ', error)
  })