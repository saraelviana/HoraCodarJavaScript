// 1 criar a class
class Mamifero {
    constructor(patas){
        this.patas=patas // este e o dado que vai para todos os mamiferos

    }
}
// 2 criar uma class lobo
class Lobo extends Mamifero{
    constructor(patas,nome){
        super(patas,patas)// estou mandando para class pai (mamifero)
        this.nome=nome // esta a propriedade da class
    }
}

const tubarao = new Lobo();
console.log(tubarao);

