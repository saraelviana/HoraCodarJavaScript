function checkNumero(n){
// pre supoem que este numero e recebido , de algum lugar, serio um numero ACEITO ou RECUSADO
return new Promise((resolve, reject) => {

    /**
     * quando temos um REJECT temos que passar uma função anonima para o promisse
     * o resove , SERIA O QUE ESTA CERTO na promisse
     * o reject , seria O QUE ESTA ERRADO
     */

    if(n>10){
    resolve(`o numero e maior que 10`);
}else{
   reject(new Error("numero muito baixo"));
}
    
});

}

const a = checkNumero(20);
const b = checkNumero(10);
a.then((v) => console.log(`o resultado e ${v}`)).catch((err)=> console.log(`um erro ocorreu:${err}`));
//a.then(v) => console.log(`o resultado e ${v}`).catch(err) => console.log(`um erro ocorreu`);
b.then((v) => console.log(`o resultado e ${v}`)).catch((err)=> console.log(`um erro ocorreu:${err}`));b
// aguardando resposta do professor
// ATENÇÃO - ENQUANTO EU NAO TINHA FEITO O - b.then - o erro no inspecionar nao saiu, agora saiu TUDO

