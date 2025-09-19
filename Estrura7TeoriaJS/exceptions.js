let x = 10
// eu posso dizer: que meu x tem que ser diferente de 11 eu quero que um erro ocorra, um sinal de alerta
// pode ser um desconto calculado errado ou um item nao cadastrado
if(x !=11){
    throw new Error("o valor de X naopode ser diferente de 11");
    // esta mensagem de erro aparece apenas para o desenvoldor
    
}