/**
 * retorno das funcoes
 * - o retorno serve para processar um valor dentro da função
 * - a palavra reservada e RETURN;  
 * - FUNCTION palavra reservada para função
 */
// cria a constantes
const a = 10;
const b = 20;
const c = 30;
const d = 40;
const e = 50;
function soma(n1,n2) {
    return n1+n2;
    
}
const resultado = soma(a,b);
// ou
console.log(resultado);
console.log(soma(c,d));

// ESCOPO DAS FUÇOES
/**
 * as funçoes tem um escopo separado do escopo do programa que e global
 * podemos entao declarar novas variveis, sem interferir nas que foram declaradas
 */

let y = 10; // declarou uma variavel fora da função
function testandoEscopo() {
    let y = 20; // declarou dentro da função
    console.log(`y dentro da função e:${y}`);
}
testandoEscopo(); // testando
console.log(`y fora da função ${y}`);
testandoEscopo();

// ESCOPO ANINHADO ou Nested Scopes
/**
 * as formas de criar variasveis, LET e CONST , nos dao a possibilidade do escopo aninhado
 * consiste em ter QUALQUER BLOCO A DECLARAÇÃO DE VARIAVEIS SEPARADAS DOS OUTROS ESCOPOS;
 * um bloco e caravterizado por um codigo entre {};
 */
// 1 declara a varivel
let m =10;
function escopoAninhado() {
    let m = 20; 
    if(true){ // o TRUE  e apenas para entrar neste IF
        let m = 30;
        if(true){
            let m = 40;
            console.log(m);// ESCOPO DA FUNÇÃO 
        }
        console.log(m);// ESCOPO DA FUNÇÃO 
    }
    console.log(m); // ESCOPO DA FUNÇÃO 
}
escopoAninhado(); // chamar ,a FUNÇÃO
console.log(m);// chamar o M do escopo GLOBAL


