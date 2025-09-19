/**
 * o metodo padstart insere um texto no começon da string
 * o texto pode ser repetido,de acodo com o segundo argumento ao metodo,ele determina o maximo de caracteres do texto alvo
 * interessante para fazera padronização de alguns valores exemplo: numero de serial 000001-000002...
 */
const testePadstart = "1"; // criar uma string ""
// criar outra variavel
const novoNumero = testePadstart.padStart(4,"0");// a string vai ter 4 digitos e preencher com o que falta com 0
console.log(testePadstart);// a string inicial começacom 1 -> tela : 1
console.log(novoNumero);// aqui inicia com 00001 -> tela : 00001

const testePadstart2 = "1";
const novoNumero2 = testePadstart2.padEnd(10,"0");
console.log(testePadstart2);// tela : 1
console.log(novoNumero2);// tela : 1000000000


