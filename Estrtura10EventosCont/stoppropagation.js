/**
 * tera evento no elemento pai e no elemento filho
 * o container esta de verde, quando se clica no 'verde' ocorrera o evento 1 quando voce clicar no botao que 
 * dentro do container ocorrerar o evento 2. neste caso:
 * 
 * const containerBtn=document.getElementById("#btn-container")
const btnInsideContainer=document.getElementById("div-btn")
/**botao dentro do container */
/*containerBtn.addEventListener("click", ()=>{
    console.log("evento 1")
})
/** agora vamos ter outro evento no botao que esta dentro  */
/*btnInsideContainer.addEventListener("click", ()=>{
    console.log("evento 2")
})
 * 
tera acionado  os 2 eventos ao mesmo tempo. E este e o problema da propagação ,
tem que utilizar o argumento do evento e ja no inicio dar um STOP APAGATION
 * 
ASSIM ele vai ativar apenas o evento 2 e nao os outros

 */


const containerBtn=document.getElementById("#btn-container")
const btnInsideContainer=document.getElementById("div-btn")
/**botao dentro do container */

containerBtn.addEventListener("click", ()=>{

    console.log("evento 1")

})
/** agora vamos ter outro evento no botao que esta dentro  */
btnInsideContainer.addEventListener("click", (e)=>{
    e.stopPropagation()/**aqui e o stop para nao ocorrero problema de duplo evento - evento 1 e depois evento 1 e 2 ao mesmo tempo */
    console.log("evento 2")

})