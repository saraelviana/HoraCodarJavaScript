const filho=document.getElementById("filho");
const pai=filho.parentElement;
console.log(pai.id);// saida "pai"
/**
 * paraentElement - retorna somente elemento HTML,ou null se o pai nao for um elemento
 * parentNode - retorna qualquer no pai,incluindo 
 */

console.log(filho.parentElement);
// <div div id="pai">...</div>
console.log(filho.parentNode);
// tambem <iv id="pai">...</div> nesse caso
