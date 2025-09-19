/**
 * sao como informaçoes de um objeto
 * os arrays tem propriedades, assim como outros tipos de dados
 * as propriedades podem ser acessadas por notação de ponto ou colchete
 * - dado.pro  ou   dado[`prop`]
 */
const numero = [5,3,4];
console.log(numero.length);// length - conta tudo que estiver dentro do []
console.log(numero["length"]);

const myname = "lauraEkikinhaMeusAmores";
console.log(myname.length);

// maneira de acessar a arrays especifica
const arrEspecifica = ["a","b","c","e"];
console.log(arrEspecifica(0)); // letra zero simboliza o local da letra "a" que seria o zero
console.log(arrEspecifica(2));
console.log(arrEspecifica(23))// undefil (vazio)
