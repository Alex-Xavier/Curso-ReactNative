//Var vs Let vs Const

/*Var => Function Scope - Hoinsting (Quando o código é compilado as
variáveis Vars são declaradas implicitamente no início do código como undefined)*/

/*Let => Block Scope - É recomendado utilizar o Let ao invés do Var
pois o Let é mais amigável ao dev no quesito de leitura de erros*/

//Const => Constant + Block Scope

function exampleVarLetConst() {
  {
    var a = 123
  }

  {
    let b = 321
  }

  const name = 'Alex Xavier'
  //name = 'Alex Vicente'

  console.log(a)
  console.log(b)
  console.log(name)
}

exampleVarLetConst()