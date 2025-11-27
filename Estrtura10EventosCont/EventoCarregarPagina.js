/**
 * direto no windosw, pagina carregou ele mostra
 */
window.addEventListener("load",()=>{
    console.log("a pagina carregouu");
})
window.addEventListener("beforeunload",(e)=>{
    /**
     * (e)=>
     * vou utilizar o E para mostrar o comportamento que e sair da pagina pois ele vem default
     * colocar um E com return value com uma "" [string vazia] que era nesta string que a 
     * menssagem ficava, agora mostrar apenas mensagem padrao do navegador
     * 
     * mensagem se realmente deseja sair da pagina e se sair vai perder os dados
     * um tipo de alerta,ultil as vezes e outras vezes apenas coerssitivo
     */
    e.preventDefault()
    e.returnValue="teste"; /**nao fez nada  */

})
