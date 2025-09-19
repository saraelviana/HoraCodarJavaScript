/**
 * metodos sao como FUNÇOES, acessamos como notação de ponto e utilizamos()para INVOCAR
 * um importante coceito da OOP
 * - objetos sao compostos por metodos e propriedades
 * como muitos dados sao objetos em js, temos metodos e propriedades neles
 */
const N = [1,2,3,4,5,"neno"];
const listaN = [1,2,3,"laura","kika"];
const todosN = N.concat(listaN); // concat - reuni
console.log(todosN);
console.log(todosN.length);

const txt = "textO 1";
console.log(txt.toUpperCase());// todas as letras( String) maiusculas
console.log(typeof txt.toUpperCase); // uma function pois e uma função dentro do meu metodo;
console.log(txt.indexOf("x"));// e o metodo para encontrar a posição de 1 caracter DENTRO string

