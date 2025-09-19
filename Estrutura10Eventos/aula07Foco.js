/**
 * e disparado quando focamos em um elemento
 * ja o - blur - e quando perde o foco do elemento
 * estes sao comuns em inputs;
 */
const input=document.querySelector("#my-input")
input.addEventListener("focus",(e)=>{
    console.log("entrou no input");
})

//const input=document.querySelector("#my-input")
input.addEventListener("blur",(e)=>{
    console.log("saiu no input");
})
// deu erro--- mas quando o usuario digita algo , aparece que o usuario clicou e pode se acionar algum evento apos isso