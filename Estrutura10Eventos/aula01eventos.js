/**
 * açoes atreladas a algum COMPORTAMENTO DO USUARIO
 * por exemplo: click,alguma tecla,movimento da tela e do mouse
 * podemos inserir logica quando estes eventos ocorrem
 * e podemos disparar eventos em certos elemntos
 * esta tecnica e conhecida como EVENT HANDLER
 * 
 */

const btn = document.querySelector("#my-button")
// qualquer seleção vale,nos que optamos por este 
btn.addEventListener("click",function(){
    // vai ter 2 elementos
    // 1 String - que e o tipo de evento, no caso e "click"
    // 2 function(): e o que vai acontecer apos clicar o evento
    console.log("voce clicou")
});

// REMOVENDO EVENTO
const secondbtn=document.querySelector("#btn");
// 
function imprimirMensagem(){
    console.log("teste 1");
}
//
secondbtn.addEventListener("click",imprimirMensagem);
// se voce colocaros () -- imprimirMensagem() a função vai ser chamada ignorado o click sacou

const thrirdbtn=document.querySelector("#other-btn")
thrirdbtn.addEventListener("click",()=>{
    console.log("evento removdo")
    secondbtn.removeEventListener("click",imprimirMensagem);
// - qual o evento que desejo remover? "click"
// - e de que função estamos falando? imprimirMensagem




})