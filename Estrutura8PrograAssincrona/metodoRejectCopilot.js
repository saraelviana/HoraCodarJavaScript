function verificaNumero(numero) {
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            if (numero>10){
                resolve("o numero e maior que 10");
            }else{
                reject("o numero e menor ou igual a 10");
            }
        },2000);
    });
    
}
verificaNumero(15)
.then((mensagem) =>{
    console.log("sucesso :", mensagem);
})
.catch((erro)=> {
    console.log("erros", erro);
});

verificaNumero(5)
    .then((mensagem) =>{
        console.log("Sucesso :", mensagem);
    })
    .catch((erro)=> {
        console.log("erro :", erro);
    });