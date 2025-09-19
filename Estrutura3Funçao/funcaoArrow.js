/**
 * ela e uma função anonima , pois ela tem que esta dentro de uma variavel
 * otima para funçoes pequenas
 * 
 */
const testArrow = () =>{
    console.log("esta e uma arrow function");
}
testArrow();
// com argumento

const parOuImpar = (n) =>{
    if (n % 2 === 0 ) {
        console.log("numero digitado e par");
        return;
    }
    console.log("foi impa");
};
parOuImpar(5);
parOuImpar(10);

///------------------------
// agora sem o bloco 
const raizQuadrada = (x)=>{
    return x*x;
};
console.log(raizQuadrada(4));

const raizQuadrada2 = (x)=> x*x;

console.log(raizQuadrada(5));
console.log(raizQuadrada2(12));

const hellowordId = ()=> console.log("hellow world");
hellowordId();

// ARGUMENTO OPCIONAIS  
/**
 * OS ARGUMENTO/PARAMETROS nas funçoes sao obrigatorios, precisamos passar todos;
 * porem ha casos de funçoes que podem funcionar sem algum dos argumentos
 * pra resolver , podemos fazer uma checagem do parametro com um IF
 */
const multiplication = function(m,n){
    if (n === undefined) {
        return m * 2;
    }else{
       return m*n;
    }
};
console.log(multiplication(5)); // com 1 numero
console.log(multiplication(2,4)); // com 2

// agora em uma situação mas real
const testeUsurio = (nome) => { // aqui ela espera o nome do usuario para saudalo, por exemplo
    // mas se o usuario nao estiver autenticado ! entao ele e falso
    // agora esta pegando o nome que e falso , trocando ele pra TRUE ! para poder entrar o IF
    // mas se escrever assim: if(nome == false) voce pode estar deixando passar um valor 
    // que nao fosse do mesmo tipo deixando passar o valor , uma falha 
    if(!nome){
        console.log("seu nome nao consta VAZA");
        return;
    }
    // mas se tem o nome 'autenticado' entao devemos imprimir o nome dele confirmando
    console.log(`ola cidadao ${nome}`);

};
testeUsurio(); // sem nada 
testeUsurio("laura_kika");
6
