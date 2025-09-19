/**
 * com o metodo getClientBoundingRect podemos pegar varias informaçoes do elemento
 * como posição no eixo X,Y , altura,largura e outras
 */
const product = document.getElementsByClassName("product");
console.log(product)
const product1 = product[0]
console.log(product1.getBoundingClientRect());
// nao apareceu nada do que o professor -- aula continua
