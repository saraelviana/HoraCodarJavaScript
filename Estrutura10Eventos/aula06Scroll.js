/**
 * podemos tambem adicionar um evento ao scroll do mouse/pagina
 * isso e feito pelo evento scroll
 * podemos determinar que algo aconteça apos chegar numa posição escolhida da tela
 */
window.addEventListener("scroll",(Event)=>{
    if(window.pageXOffset>150){
        console.log("passamos de 150px");
    }
})
// assim cosegue estabelecer açoes para quando o usuario atingir esta margem, a posição da pagina. ITERESSANTE