/**
 * METODO INCLUDE VERIFICA SE O ARRAY TEM UM ELEMENTO
 * UTILIZAMOS NO ARRAY E COMO ARGUMENTO COOCAMOS O ELEMENTO QUE BUSCAMOS
 * 
 */
// 1 CRIAR UM ARRAY - UMMA LISTA DE MARCAS
const marcas = ["bmw","cheve","fiat"];
// checar se variavel marcas contem uma marca especifica
console.log(marcas.includes("fiat"));// devolve um boolean VERDADEIRO - TRUE
console.log(marcas.includes("kia")); // devolveu um boolean FALSO - FALSE - pois esta marca nao consta 
// NA PRAICA
if(marcas.includes("kia")){// AQUI SERIA UMA POSSIBILIDADE DE PESQUISA
    console.log("tem este modelo")
}else{
    console.log("nao tem este modelo mane");
}
