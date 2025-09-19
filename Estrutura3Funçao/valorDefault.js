/**
 * o valor default e quando O ARGUMENTO TEM UM VALOR PREVIO
 * se for passado um novo valor,o default e substitido
 * se nao , o default e utilizado na função
 * 
 */
// o greeting como comprimenta a pessoa, vai ser um ARGUMENTO DEFAULT
// agora como faço isso ! faço atribuição aqui na area de argumento com o valor que eu quero que seja
// pois o GREET se nao for passado nada , ELE TEM O VALOR de OLA BELEZA

const customGreeting = (nome, greet = "ola beleza") => {
    return `${greet}, ${nome}!`
};
console.log(customGreeting("ola kikinha"));// 
console.log(customGreeting("bellucci", "filhinha do papai"));// utilizando o argumento que eu vou preencher e 
                                                            // e nao o default
