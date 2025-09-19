// geralmente se declara uma variavel para ter este elemento selecionado em outros locais do codigo

const listItens = document.getElementsByTagName("li")
console.log(listItens);
// ele selecionou todos os li (list)... mas se tivesse mais li dentro do site ele ia buscar, este que e o problema sem ser especifico 