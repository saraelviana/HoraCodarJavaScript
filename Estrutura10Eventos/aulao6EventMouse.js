/**
 * eventos
 * mousedow: pressionou botao do mause
 * mouseup: soltou botao do mouse
 * dblclicl: clique duplo
 */
const mouseEvents=document.querySelector("#mouse");
mouseEvents.addEventListener("mousedown",()=>{
    console.log("pressionou botao");
});

//const mouseEvents=document.querySelector("#mouse")
mouseEvents.addEventListener("mouseup",()=>{
    console.log("pressionou pra cima");
})

//const mouseEvents=document.querySelector("#mouse")
mouseEvents.addEventListener("mousedblclick",()=>{
    console.log("clicou botao");
})
// deu erro
//***************************** */
/**
 * movimento do mouse
 * e possivel ativar um evento a partir do movimento do mouse
 * o evento e o mousemove
 * com o objetivo,podemos detectar a posição do poteiro do mouse
 */
document.addEventListener("mouse",(e)=>{
    console.log(`no eixo X: ${e.x}`)
    console.log(`no eixo y: ${e.x}`)
})
