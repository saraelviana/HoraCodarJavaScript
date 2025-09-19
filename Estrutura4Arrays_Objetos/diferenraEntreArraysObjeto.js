/**
 * os arrays sao utilizados como lista de itens, geralmente possui o mesmo tipo
 * ja o objeto(s) sao utilizados para descrever um item
 * - contem as informaçoes do mesmo, as propriedades possuem diferentes tipos de dados
 * podemos ter tambem , uma Arrays de objetos, isso e muito utilizados
 */
///
/**
 * mais sobre objeto
 * 
 * podemos copiar todas as propriedades de um objeto para outro com o metodo ASSIGN
 * o objeto literal e uma instancia de um objeto chamado OBJECT
 * um objeto ou array criado com CONST pode ter seus elementos e propriedades modificados
 * udando CONST mas por segurança , para ter uma confusao
 */
// exemplo
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
