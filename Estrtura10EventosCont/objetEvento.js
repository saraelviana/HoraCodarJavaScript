/**
 * vamos colocar um id no titulo para demonstração 
 * 1-escolha o nome do evento
 * 2-chama pela id ou classe para adicionar o evento
 * 3-adicione o evento
 * 4-pode aparecer (event) ou apena (e)
 */


const mytitle=document.getElementById("#my-title")
mytitle.addEventlisterner("click", (e)=>{
console.log(e);


console.log(e.offsetx);/**posição do elemento no eixo X */
console.log(e.pointerType);/** */
console.log(e.target);/** como se estivesse chamando o elemento,elemento sourc do evento,pra saber que elemento foi clicado*/


})