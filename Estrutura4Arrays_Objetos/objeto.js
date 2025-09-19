/**
 * PODEMOS verificar melhor a propriedades de um objeto pelo METODO KEYS de Object
 * com o metodo ENTRIES recebemos uma array dos nomes das propriedades com seus valores
 * nomes das propriedades comseus valores
 */
const pessoa = {
    nome: "Laura",// nao uso o sinal de = mas o sinal de :
    idade: 3,
    job: "princesa do papai"

};
console.log(pessoa);// posso imprimir ele
console.log(pessoa.nome);// acessar cada uma das propriedades individualmente
console.log(pessoa.nome.length)// posso acessar a propriedade daquele tipo de dado



// criar 1 objeto
const obj1 = {
    a: "teste",
    b: true,
};
//console.log(obj instanceof Object);

const obj2 ={
    a:[]
};
// agora quero que este cara BJ2 tenha as mesmas propriedades de OBJ1
Object.assign(obj2, obj1);// OBJ2 e o destino OBJ1 a origem de onde ele vai tirar as propriedades
console.log(obj2);
//---------------------------------------------------------------------------
console.log(Object.keys(obj1));
console.log(Object.keys(obj2));
console.log(Object.entries(pessoa));// entrega os dados da proriedade

