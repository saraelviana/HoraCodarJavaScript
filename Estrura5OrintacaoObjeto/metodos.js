// toda funçao dentro de um objeto e um metodo
// e quando temos so um valor e uma propriedade
// invocamos os metodos da mesma forma que as funçoes
// O metodos sao utilizados para INTERAGIR TAMBEM COM AS PROPRIEDADES DO SEU OBJETO
// podemos nos referenciar com o proprio objeto com a palavra RESERVADA THIS


// 1 vamos criar 1 objeto
// 2 adicionar as propredades
const animal = {
    nome:"cachorro",// sem esta virgula fica dando erro na propriedade latir
    // vamos criar uma função ao animal- em vez de latir:"au","au"--- vamos criar uma funcao
    latir:function(){
        console.log("au,au,auuu");

    }
}
// acessar 
console.log(animal.nome);
// agora vamos usar como se fosse uma propriedade
// com a anotação de . que e como acessa a propriedade do objeto
// mais com () da função
// como se eu estivesse executando a propriedade que esta dentro do objeto e isso e um METODO
animal.latir()


// 1 vamos  criar um objeto
const pessoa = {
    nome : "belllucci",

    getNome: function(){
    return this.nome;
},
setNome: function(novoNome){
 this.nome = novoNome; // mostrar a utilização do this-- atribuindo 
}

};
console.log(pessoa.nome);
console.log(pessoa.getNome());
// ambas fazem a mesma coisa 
pessoa.setNome("kika");
console.log(pessoa.getNome());
