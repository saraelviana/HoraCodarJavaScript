/**
 * o metodo SLICE e utilizado para extrais um array menor de um array maior
 * O INTERVALO DE ELEMENTO E DETERMINADO PELOS PARAMETROS,que sao 
 * - o indice de inicio e o indice de fim
 * O ULTIMO  elemento e ignorado,se quisermos ele devemos somar 1 ao indice final
 */
const vogais = ["a","e","i","o","u"];
const subArray = vogais.slice(0,3);
console.log(vogais);// (5) ['a', 'e', 'i', 'o', 'u']
console.log(subArray);// (3) ['a', 'e', 'i']


const subArray2 = vogais.slice(0,3+1);
console.log(subArray2);// (4) ['a', 'e', 'i', 'o']

