/**
 * direto na janela, pois ela e a referecia e nao o document
 * aqui voce consegue calcular quantos pixel ja passou da tela, isso e feito com:
 * window.pageYOffset
 * quando voce rolar a pagina, esse valor vai aumentando, e quando voce voltar para o topo, ele volta a ser 0.
 * entao voce pode usar esse valor para fazer alguma coisa quando o usuario rolar a pagina.
 */
window.addEventListener("scroll",(e)=>{
    if(window.pageYOffset > 100){/**vai verificar se e maior que 100, se for entao: */
        console.log("voce ja passou de 100px");
    }

})