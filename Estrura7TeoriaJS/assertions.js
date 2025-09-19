// vamos fazer de conta que eu tenho uma função que checa o meu array
function checkArray(arr) {
    if (arr.length === 0 ){// aqui vamos fazer um check
        throw new Error("o array precisa ter elementos porra");// caso o usuario tente rodar no vazio
        
    }else{
        
        console.log(`o array tem o ${arr.length} elementoss`);
    }
    
}
// bota pra rodar
//checkArray([]);// no vazio--- tinha errado , tinha colocado {} em vez de [] nao aparecia a 1 mensagem
checkArray([1,2,3]);// na tela -> o array tem o 3 elementoss

