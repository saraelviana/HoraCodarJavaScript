/**
 * para adicionar uma nova propriedade a um objeto utilizamos a notação de ponto e atribuimos um valor
 * ja para excluir, vamos utilizar o operador delete na propriedade alvo
 */
// vamos criar 1 objeto
const carro={
    ano:2009,
    motor:2.0,
    marca:"honda",
    portas:4,
};
console.log(carro);
// pra acrescentar mais 1 item ao objeto e simples basta
carro.portas=4;
//  escolhe a propriedade e deleta
delete carro.ano

