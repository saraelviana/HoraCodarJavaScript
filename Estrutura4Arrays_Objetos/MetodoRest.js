/** resto parametro
 * rest Operator e caracterizado pelo simbolo ...
 * podemos utiliza-lo para receber idefinidos argumentos em uma função
 * assim nao precisamos declarar exatamente o que vamos receber,seixando mas ampla
 */
// vamos usar array function que seria : =>
const somaInfinita = (...args)=> { // em vez de ser (a1,a2,a3) vai ser numeros argumentos infinitos, 
                                  // neste caso e (... args) mas pode ser qualquer nome
// criar uma variavel pra incrementar , conforme os argumetos chegam vamos somando
let total = 0 ;
// criar um loop pra poder somar estes itens
// ja que os args se transformam em um array EPOR ISSO pode fazer o loop
// enquanto i for menor que meus ...args (argumentos)
// i ++ pra incrementar minha variavel de referencia
// e vai somando o total com cada um dos args (argumentos)
for(let i = 0; i < args.length; i++){
    total+=args[i];

}
return total;
};
console.log(somaInfinita(1,2,3));// aqui foi passado 3 args

