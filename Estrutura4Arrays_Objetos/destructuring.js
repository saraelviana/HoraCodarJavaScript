/**
 * o destructuring e uma funcionalidade que nos permite desestruturar algum dado
 * no caso dos objetos , e possivel criar variaveis a partir das suas propriedades como uma simples sintaxe
 * 
 */
// vamos imaginar um OBJETO com os dados de um usuario
const dadosUsuario = {
    PrimeiroNome:"neno",
    ultimoNome:"viana",
    trabalho:"empreendedor",
    // normolmente vamos querer exibir os dados do usuario
    // o modo mas facil e reaproveitar as variaveis
    // -> seria assim > const nome = userDetails.nome CRIAR 3 LINHAS 3 VARIAVEIS PRA MOSTAR O NOME DO USUARIO
    

}
// vamos criar uma estrutura de CONST 
// abro e fecho {}
// vamos colocar os nomes das propriedades
// elas vao automticamente vao identificar que ha propriedade com o mesmo nome no objeto e vao criar variavel pro meu codigo
const{PrimeiroNome,ultimoNome,trabalho}=dadosUsuario;

console.log(PrimeiroNome,ultimoNome,trabalho);
// existe casos que terei que renomear esta propriedade,pode ser que eu ja tenha esta variavel declarada no codigo, entao nao vou poder utilizar o que esta no objeto
// se for renomear e assim:
// const{PrimeiroNome: primeiroNome}=dadosUsuario;
// detalhando -> destructuring
//            -> nome da propriedade que vai mudar : PrimeiroNome
//            -> nome da nova variavel : primeiroNome
//            -> = ao objeto : dadosUsuario
// ele identificar a propriedade PrimeiroNome la dentro do objeto e cria uma variavel chamada primeiro nome
//  como valor que esta em PrimeiroNome
const{PrimeiroNome: primeiroNome}=dadosUsuario;
// ATENÇÃO !! E SE EU UTILIZO ALGUMA COISA QUE NAO TEM NO OBJETO, ? (AltGr+w)
// ele vai criara a variavel normalmente ELE NAO DAR ERRO , E ISSO E MUITO PERIGOSO
console.log(asd); // undfild ele vai lar e cria uma propriedade vazia



