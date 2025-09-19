/**
 * e um recurso que permite a função se AUTOINVOCAR CONTINUAMENTE
 * criamos uma especie de loop
 * tem que definir umacondiçãofinal para dar o stop
 */
// 1 a constante
const conte = (n,m) => {
    if (n<10) {
        console.log("a função de contar parou de funcionar");
    }else{
        const x = n-m;
        console.log(x);
        conte(x,m);
    }
    
};
conte(100,7);
// deu certo
/**
 * agora como seria uma função INFNITAMENTE
 * SRIA ASSIM
 */
/**
 * function run(){
 * console.log("executando infinitoooo");
 * run();
 * }
 * run();
 * 
 */

// caso real para calcular o valor de um numero

function factorial(x) { // nome da função
    if (x === 0) {
        return 1;
    }else{
        return x * factorial(x-1);// se auto invocando aqui
    }
}
const num = 6; // vamos ver o fatorial do numero 6 por exemplo
const result = factorial(num); 
console.log(`o fatorial do numero ${num} e ${result}`);
