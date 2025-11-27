const btn1=document.querySelector("#btn")
function imprimirTxt(){
    console.log("teste");
}

btn1.addEventListener("click",imprimirTxt);
/*em vez de passara função, escreve a nome da sua função , sem os parentes se nao ele executa quando le*/
const btn2=document.querySelector("#btnRetirar")
btn2.addEventListener("click", () => {
    /**neste aqui eu posso escrever uma função normal */
    /** aero functions assim,  () => */
    console.log("evento removido");
    btn2.removeEventListener("click",imprimirTxt)
    /**o que o btn2 vai fazer? REMOVER
     * O que ele vai REMOVER? O evento do 1 bnt1("click",imprimirTxt)
     * o nome do metodo que remove o evento->removeEventListener()
     * agora coloca dentro dos () quem ele vai remover, e isso e a função do botao BTN2
     * btn2.removeEventListener("click",imprimirTxt)
     */

})