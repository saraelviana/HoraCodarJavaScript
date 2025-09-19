 /**
  * VAMOS CRIAR NOSSAS FUNÇOES
  * - 1 utilizamos a palavra     FUNCTION   , isso inicia uma função
  * - 2 nomea la
  * - 3 os PARAMETROS que sao uma especie de configuração ficam dentro do () depois do nome
  * - 4 o corpo da função fica entre {}
  * - 5 geralmente uma função retorna com um valor
  */
 function minhaFuncao() {
    console.log("testando");
    
 }
 minhaFuncao();// tem que invoca la para pode aparecer

 // interesante e colocar uma função dentro de uma variavel

 const minhaFuncaoVariavel = function(){
   console.log("função em variavel");
 }
 minhaFuncaoVariavel();

 // função com argumento
 function funcaoComAgumento(txt){// pode ser argumento ou paramentro
 console.log(`imprimindo ${txt}`);}
 funcaoComAgumento("imprimindo alguma coisa");
 funcaoComAgumento("outra função,reaproveitando a função")

 // meu proprio exemplo
 function jogaNaTela(txt) {
   console.log(`jogando na tela ${txt}`);
   
 }
 jogaNaTela("beijo kikinha e laura");
 // 18-02 - retornando valores em função
 

