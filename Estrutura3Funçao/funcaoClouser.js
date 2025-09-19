/**
 * as clouses tambem podem servir para SALVAR OS RESULTADOS  ja executados
 * criando uma especie de incrementação
 * assim temos uma variavel que executa uma função e modifica seu valor
 */

function someFunction (){
    let txt = "ola meus amores"
    function display() {
        console.log(txt);
    }
    display();
};
someFunction();
//
const multiplicacaoClosure = (n) => {
    return(m) =>{ 
        return n*m;
    };
};
// a 1 vez que executamos ele vai cria 1 valor so M
// ele nao vai conseguir fazer a multiplicação ,porque nao tem com que multiplicar
const c1 = multiplicacaoClosure(5);
const c2 = multiplicacaoClosure(10);
console.log(c1);
console.log(c2);
// ate aqui , ele salva o numero mas na INSPEÇÃO no chrome so aparace a função salva
// para confirmar eu posso reexecutar c1 e c2 com um novo valor
console.log(c1(5));
console.log(c2(10));
// o resultado va ser impresso c1- 25 e c2 - 100
// e esta e a prova que armazena
// certinhoooo

