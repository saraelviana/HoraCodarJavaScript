/**
 * e este por nao conter elemento vai ser direto no document
 */


const mouseEvent=document.querySelector("#mouse")
mouseEvent.addEventListener("mousedown",()=>{
    console.log("pressionou o botao do mouse")
})

mouseEvent.addEventListener("mouseup",()=>{
    console.log("quando o usuario solta o botao do mouse")
})

mouseEvent.addEventListener("dbclick",()=>{
    console.log("click duplo botao do mouse")
})

mouseEvent.addEventListener("mousemove",(e)=>{
    console.log(`no eixo ${e.x} e no eixo ${e.y}`)
})



/**
 * const mouseEvento=document.querySelector("#mouse")
mouseEvent.addEventListener("mouseup",()=>{
    console.log("quando o usuario solta o botao do mouse")
})

const mouseEvents=document.querySelector("#mouse")
mouseEvent.addEventListener("dbclick",()=>{
    console.log("click duplo botao do mouse")
})
 * 
 * 
 * 
 */

