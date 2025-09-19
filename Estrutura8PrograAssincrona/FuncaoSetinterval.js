console.log("Ainda nao executou");

setTimeout(function(){// aqui entra a função anonima que vai ser executada depois de um tempo
    console.log("Requisação assicronica");

},20000)// quanto tempo depois que seria 1 mil e igual a milesegundo.Entao 2000 seria 2 milesegundo

console.log("ainda nao executou 2");
// novamente
console.log("Ainda nao começou executou");

setTimeout(function(){// aqui entra a função anonima que vai ser executada depois de um tempo
    console.log("intervalo assicronica");

},3000)// quanto tempo depois que seria 1 mil e igual a milesegundo.Entao 2000 seria 2 milesegundo

console.log("ainda nao executou 3");



