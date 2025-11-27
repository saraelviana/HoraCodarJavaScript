const input=document.getElementById("#my-input")
input.addEventListener("focus",(e)=>{/**isso e a função anonima --(e)=>-- */
    console.log("entrou no input")

})
input.addEventListener("blur",(e)=>{/**isso e a função anonima --(e)=>-- */
    console.log("saiu do input")

})
