// 1 como se declara uma classe
class CachorroClasse {
    constructor(nome , raca ) { // utilizar a função constructor
        this.nome = nome
        this.raca = raca
        // e assim que e criado objeto atualmente em js
    }
}
const leitao = new CachorroClasse("leitao","lavrador");// tenho um cachorro chamado leitao
console.log(leitao);

CachorroClasse.prototype.Latir=function(){
    console.log("Auauauauauuuu...grrrr");
}
leitao.Latir();

class Caminhao {
    constructor(eixos, cor){
        this.eixos=eixos;
        this.cor=cor;
    }
    descreverCaminhao(){
      //  console.log("este caminhao tem "+ this.eixos +" "+"e a cor e"+this.cor);
        console.log(`este caminhao tem ${this.eixos} e da cor ${this.cor}`);
    }
}
const scania = new Caminhao(6,"vermelho");
console.log(scania);
scania.descreverCaminhao();

// se fizer assim nao vai funcionar: Caminhao.motor = 4 
// pois ele so ira reconhecer o que estiver DENTRO CONSTRUCTOR

const c2 = new Caminhao(4, "preto")
console.log(c2);
console.log(c2,motor);
// se ficar assim ele nao esta herdando nenhuma propriedade
// mas se usar o prototype


