// agora vamos simular esta propagação
const containerbtn=document.querySelector("#btn-container")
const btnInsideContainer=document.querySelector("#div-btn")
// elemento pai
containerbtn.addEventListener("click",()=>{
    console.log("evento 1");
})
// agora elemento filho o btn que esta dentro
btnInsideContainer.addEventListener("click",(e)=>{
    e.stopPropagation(); // eventos separados
    console.log("evento 2");
})
// mas nao rolou - continuando
