// 1 criar a classe
class Humano {
    constructor(nome,idade,cor) {
        this.nome=nome;
        this.idade=idade;
        this.cor=cor;
        
    }
}
// vamos trabalhar agora
const neno=new Humano("neno",31,"negro"); // se eu lançar aqui 1 item que nao esta no construtor da erro, 
console.log(neno);                      // mas vou inverter, vou escrever construtor e nao incluir aqui
                                    // se eu declarar no construtor e nao incluir da apenas undfil(vazio)
// agora ,depois de tudo certinho, vamos de PROTOTYPE
Humano.prototype.idade="nao definida";
                // por mas que fique nao definido, mas la atras ja foi definido
console.log(neno.idade);// aqui apenas jogou a idade 31 fora do scopo , so imprimindo na tela mesmo
console.log(Humano.prototype.idade);
/**
 * cor: "negro"idade: 31nome: "neno"
 * [[Prototype]]: Object
OverrideviaPrototype.js:17 31
OverrideviaPrototype.js:18 nao definida
 * 
 * assim que sai na tela 
 */