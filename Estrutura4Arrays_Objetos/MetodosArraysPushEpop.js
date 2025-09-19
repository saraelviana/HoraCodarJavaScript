/**
 * os metodos de arrays sao muito uteis para MANIPULAR OS ARRAYS ou seja alterar seus valores de alguma forma
 * com o PUSH adiciona um item ao fim do array
 * com o POP temos a remoçãode um elemento do fim do array
 */
// criar uma lista de elementos
const arrays = ["klissia","laura","papai","jesus","kassia"];
arrays.push("HEREGE"); // vou adicionar
console.log(arrays);
console.log(arrays.length);// informação da quantidade
arrays.pop();

console.log(arrays);
const itemRemovido = arrays.pop(); // o POP retorna com este item removido se voce quiser
console.log(itemRemovido);
arrays.push("kassia","SALVA","SEM","GALARDAO");
console.log(arrays);

