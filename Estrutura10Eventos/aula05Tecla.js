/**
 * mapea as açoes do teclado,temos a disposição - keyup e keydow -
 * keyup : ativa quando a tecla e solta 
 * ( para buscar palavras)
 * keydow: quando e pressionado
 * (para validaçao,usuario digitou uma tecla errado ja valide)
 */
//evento de tecla keyup
// pode deixar ativado que registra tudo que e digitado
document.addEventListener("keyup",(e)=>{
    console.log(`digitou a tecla ${e.key}`);
})// deu certo

// evento de tecla keydow
document.addEventListener("keydown",(e)=>{
    console.log(`apertou a tecla ${e.key}`);
})