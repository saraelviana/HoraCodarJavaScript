/**
 * o metodo INDEXOF nos permite encontrar o inicio de um elemento, que passamos como argumento para metodo
 * ja o IASTINDEXOF e usado quando ha repetições de elementos e precisamos de indice da ultima ocorrencia
 */
const frutas = ["morango","uva","cebola","tomate","cebola"];// ATENÇÃO toda ARRAY começa do ZERO
console.log(frutas);
console.log(frutas.indexOf("uva"));// uva e elemento 1, pois o morango e 0
console.log(frutas.indexOf("cebola"));// apareceu a 2 colocação da direita pra esquerda
console.log(frutas.lastIndexOf("cebola"));// e o item 4  na lista
console.log(frutas.indexOf("gilo"));// o resultado quando nao se encontra e -1


