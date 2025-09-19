/**
 * para adicionar metodos antes da criação do objeto,podemos acessar o prototype e coloca-los la
 * esta e basicamente a essencia de js
 * porem com a evolução da linuagem,outros recursos foram criados,e o que veremos depois
 * 
 */
function Cachorro(nome,raca){ // INICIA com a letra MAISCULA , pois ele ja vai enteder que e 1 CLASSE
    this.nome = nome; // aqui nao preciso do objeto vazio
    this.raca = raca; // botas as propriedades
}
const pitbull = new Cachorro("leitao","pitbull") ;// um bjeto criadopor meio de uma função
console.log(pitbull);
// 1 vou acessar a classe cachorro

Cachorro.prototype.uivar = function(){// vamos adicionar a function e atribuir a função de propriedade UIVAR
    console.log("Auuuuuuuuuuuuuuuu");

};
pitbull.uivar();// utilizando a função 

