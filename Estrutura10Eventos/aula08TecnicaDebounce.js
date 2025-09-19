const debounce = (f,delay)=>{ 
    // criar uma função com 2 argumentos (f,delay)
    let timeout // criar 1 variavel, ela começa sem valor depois sera adicionado valor nela

    return (...arguments)=>{
// aqui desta forma eu acesso todos os argumentos

if (timeout) {
    // 1 verificar se tem algum timout ocorrendo
    clearTimeout(timeout)// se tiver utilizado ,sera limpado
                        // assim estara encerrando o timeout, pra poder começar novamente
    timeout=setTimeout(()=>{
        // vai executar uma função
        // o argumento vem como texto
        // vamos usar o metodo apply, vamos utilizar os argu que qeremos , em algumas situações so com ela
        f.apply(arguments)
        // e como se estivesse programando uma execução de 1 função



    },delay);

};
    };

};
// como se testa isso? vamos criar um evento na windons
//window.addEventListener("mousemove",()=>{
//    console.log("executando evento");
    // tela : 526  aula08TecnicaDebounce.js:
    //        29 executando evento
    // enquanto o mouse fica se movimento ate o stop do mesmo, fica sendo contabilizado
    // o correto e ele executar de tempos em tempos
//})
window.addEventListener("mousemove",debounce(()=>{
    // em vez de executar diretamente,vamos chamar a - debouce - , e para ela , o que deseja que ela execute ( uma função anonima), que seria 
    // o 1 argumento o f 
    // (f,delay)
    console.log("executando a cada 100s");
    // agora vamos passar os segundos
},100));
// agora , em ves de executar a função direto [como esta no exemplo anterior], foi passado o evento com a função debounce
// agora nao deu certo, nao apareceu nada no inspecionar- vamos continuar
