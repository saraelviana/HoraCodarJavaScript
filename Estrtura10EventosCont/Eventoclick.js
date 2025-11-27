/*adicionando o botao */
const btn=document.querySelector("#botao1")
/* qual metodo serve, vamos adotar esta,querySelector... para padrao do curso*/

/**temos 2 argumento 1 - string "click" e o a função */
btn.addEventListener("click" , function(){
    console.log("ckiccou aqui")
})