/**
 * ja o join une um array em uma string
 * podemos colocar separador tambem,para forma um astring
 */
const itensComprar = ["pilha","computador","teclado","cadeira"];
// const fraseCompra = `precisamos comprar: ` +itensComprar.join(" , ");
const fraseCompra = `precisamos comprar: +${itensComprar.join(" , ")}.`;
console.log(fraseCompra); // tela : precisamos comprar: pilha , computador , teclado , cadeira
