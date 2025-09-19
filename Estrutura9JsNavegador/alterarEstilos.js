/**
 * HTMLCollection aparece quando selecionamos varios elementos de uma vez
 * podemos passar por cada um dos elementos com um - for of -  e estilazar individualmente cada item
 */
const listItem = document.getElementsByTagName("li");

// agora vamos percorrer com o - for -
for(const li of listItem){
    li.style.backgroundColor = "red";
    // ele vai fazerum loop percorrendo cada - li - mudando a cor de fundo para vermelho 
}
// nao mudou nada, nao sei o que fiz de errado
