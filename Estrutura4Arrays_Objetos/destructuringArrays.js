/**
 * tambem muito utilizado para desestrutura um array em variaveis
 * a sintaxe e um pouco diferente,agora utilizaremos colchetes e nao temos nome das chaves
 * lembrese que array funcionam com indices
 */
const minhaLista = ["aviao","sub marino","carro","pato"];
// a ordem do indice e a que conta
// anotação de colchetes
const {veiculoA,veiculoB,veiculoC,veiculoD}=minhaLista;
console.log(veiculoA,veiculoB,veiculoC);
