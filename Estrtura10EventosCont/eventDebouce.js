/**
 * 
 * a F [função] que vai ser executada em tanto tempo e o delay [tempo de espera]
 * para ativar o evento novamente
 */

const debounce = (f,Delay)=>{
    /**1 variavel , com let porque vai sobreescrever nela depois, começa sem valor
     * depois vai ser adicionado valor nela
    */
    let timeout;

    /**aqui vai ser acessado os argumentos */
    return (...args)=>{
        /**agora vai ser verificado se tem um timeout ocorrendo */
        if(timeout){
            clearTimeout(timeout);/*se tiver vai ser limpado o timeout,para poder reiniciar */

        }
        timeout=setTimeout(()=>{
            /**aqui vai executar, a função vai vim como argumento,(texto)
             * e preciso executar a função com os argumentos que vieram
             * e o metodo e o apply que vai permitir passar os argumentos
             */
            f.apply(this,args);
            /**
             * ele criou um timeout que vai executar a função f
             * baseado no delay que foi passado
             * ele vai executar a função quando for solicitado
             * Se o usuarios invocar o evanto mais de 1 vez,vai ser necessario matar o timeout
             * atual e iniciar um novo timeout novamente
             * 
             */

    })
    }}
    window.addEventListener("mousemove", debounce(()=>{
        /**A função o F o 1 argumento */
        console.log("moveu o mouse com debounce a cada 400 ms");
    },400)) /*o 2 argumento o delay, , so executa quando ele para de mover o mouse */
        /** o set timeout, ele vai sempre resetar a contagem */
        
        /**
         *window.addEventListener("mousemove",()=>{
         * console.log("moveu o mouse");
         * deste maneira o evento e disparado continuamente varias vezes,nao quero
         */


         
