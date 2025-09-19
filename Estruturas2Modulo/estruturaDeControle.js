//04-02

/***
 * estrutura de controle
 * - os programas sao executados de cima para baixo
 * - com esta extrutura podemos alterar o fluxo de execução
 * - if / else
 */
const m = 10;
if (m>5) {
    console.log(" numero e maior ");
    
}else {
    console.log("numero e menor");
}

const n = "joao";
if (n === "joao") {
    console.log("ola joao");
    // === e para asegurar a condição
    
}
else{
    console.log(" voce nao e o joao");
}

const loggedIn = false;
if (loggedIn) {
    // desta forma , ele ja diz : Se for verdadeira ja executa
    console.log("esta verdadeiro")
    
}else{
    console.log("nao esta verdadeiro")
}
const a = 10;
const b = 15;
if (a > 5 && b > 20) {
    console.log("numero mais alto")
    // true
    
} else {
    console.log("os numeros nao sao mais altos")
    // false
}

// else if
/**
 * e possivel adicionar novas condiçoes com no if
 * se inicia com 1 IF e encadear varios outros else if
 */

if (1 >2) {
    console.log("teste");
    
}else if (2 >3) {
    console.log("teste 2")
    
}else if( 5> 1){
    console.log(" agora sim")
}
