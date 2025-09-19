/**
 * selecionamos um conjunto de elementos por meio de um seletor de CSS
 * Se eu quiser escolher 1 so tambem posso usar o querySelector apenas um elemento , com base tambem um seletor de CSS
 */
const product=document.querySelectorAll(".product");
// (".") aqu te que usar o SIMBOLOS DOS SELETORES class e um .
// . e uma classe entao fica assim (".product")
console.log(product);
// nao deu boa este, vamos seguir

// agora selecionar 1 so
const miniConteiner=document.querySelector("#main-container");
console.log(miniConteiner);
// nao deu boa tambem

