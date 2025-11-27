const a=document.querySelector("a")
a.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("nao altera a pagina , apenas retira o evento padrao")
    /**
     * retira a função do link sem alterar a pagina
     */
})