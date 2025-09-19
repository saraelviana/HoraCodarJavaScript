function checkNumero(n){
    // normalmente este dado chega como letra (texto), vamos ter que validar se ele e 1 numero ou nao
    // podemos passar isso para um objeto number
    const result = Number(n)// praticamente esta convertendo qualquer numero para qualquer tipode dado
    // agora baseado no reultado , ira fazer suas validaçoes
    if(Number.isNaN(result)){
        // se o numero for verdadeiro,, por exemplo NAO E UM NUMERO
        console.log("valor,incorreto");// passo uma mensagem de erro para o usuario
        return;
    }
    // caso passe,teria um valor correto
    console.log("valor correto");
    return result;

}
// vamos passar o resultado por ele
checkNumero(5)
checkNumero("10")
checkNumero({})//objeto vazio
checkNumero("teste")
