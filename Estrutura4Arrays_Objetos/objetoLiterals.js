/**
 * aqui e um recurso chamado object literals !por que ,  nos criamos uma sintaxe especial bem parecida
 * com a do OBEJTO  mas eles nao sao tecnicamente a mesma coisa
 * (na orientação o objeto vem das classes)
 * em js temos um tipo de dado que e objeto,mas seu nome tecnico e OBJETO LITEAlS
 * isso porque o OBJETO vem da orientação a OBJETO, com outros recursos;instancia,herança... 
 * Ja o LITERALS possui apenas propriedades e metodos, nos mesmos criamos
 * o objeto fica em um bloco de {};
 * 
 */
// vou criar um objeto que descreve uma pessoa
// eu coloco ele em uma variavel como se fosse qualquer outro valor

const pessoa = {
    nome: "Laura",// nao uso o sinal de = mas o sinal de :
    idade: 3,
    job: "princesa do papai"

};
console.log(pessoa);// posso imprimir ele
console.log(pessoa.nome);// acessar cada uma das propriedades individualmente
console.log(pessoa.nome.length)// posso acessar a propriedade daquele tipo de dado