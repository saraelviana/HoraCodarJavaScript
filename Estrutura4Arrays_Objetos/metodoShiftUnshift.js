/**
 * ao cotrario de POP e PUSH temos o shift e unshift
 * shift remove o primeiro
 * unshifit adicina ao inicio
 */
const letras = ["a","b","c",","];
const resgateL = letras.shift();
console.log(letras);
// tambem da pra resgatar o valor no shifit igual o do pop

console.log(resgateL);
console.log(letras);

letras.unshift("p","j","t");

letras.unshift("z");
console.log(letras);