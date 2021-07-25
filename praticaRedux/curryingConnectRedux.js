/* Currying */

react-redux
const outraFunção = connect(mapStateToProps)
const ConnectedComponent = connectoutraFunção(MeuComponente)

// Benefícios do Currying
const ConnectedComponentDois = connectoutraFunção(MeuComponenteDois)
const ConnectedComponentTres = connectoutraFunção(MeuComponenteTres)

// Se não houvesse Currying
connect(/* */ /* */ /* */ /* */ /* Componente */)
connect(mapStateToProps, null, null, null, MeuComponente)

// Simplicidade do Currying
connect(mapStateToProps)(MeuComponente)