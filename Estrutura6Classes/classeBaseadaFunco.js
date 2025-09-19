/**
 * este recurso e semelhante ao anterior,mas com uma nova plavara chave : a NEW
 * em varias linguagens o new e utilizado para instaciar novos onjetos em js
 * e eles podem partir de funçoes
 * tambem e uma função construtora
 */
function Cachorro(nome,raca){ // INICIA com a letra MAISCULA , pois ele ja vai enteder que e 1 CLASSE
    this.nome = nome; // aqui nao preciso do objeto vazio
    this.raca = raca; // botas as propriedades
}
const pitbull = new Cachorro("leitao","pitbull") ;// um bjeto criadopor meio de uma função
console.log(pitbull);
