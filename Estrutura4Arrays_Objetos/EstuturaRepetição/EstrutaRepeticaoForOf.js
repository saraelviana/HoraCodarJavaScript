/**
 * o for...of e uma estrutura de repeticao semelhante ao for,porem mais simples
 * o numero de repetição e baseado no array
 * e podemos nos referi aos elementos sem precisar
 * Em vez de eu trabalhar incrementado e condicoes de parada e etc.. u
 */
// a mesma questao da soma infinita so que mais simples

const num = [1,2,3,4,5,1];
const somaInfinita = (...contar) =>{
    let total = 0;
    for (const num of contar) { // (const   element num      of    object  contar)
      total+=num;  
    }
}
console.log(somaInfinita(1,2,3));
console.log(somaInfinita(45,48,40,23));