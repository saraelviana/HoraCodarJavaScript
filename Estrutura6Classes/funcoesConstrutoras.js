/**
 * utilizando funçoes como classes, conseguimos iniciar as propriedades com a criação do objeto
 * chamamos de função CONSTRUTORA esre recurso
 * pois tem como objetivo INSTANCIAR um objeto,ou seja , criar um novo objeto
 */
function criarCachorro (nome,raca){
    const cachorro = Object.create({});// aqui vamos criar 1 objeto vazio
    cachorro.nome=nome; // eu coloco as propriedades deles pelo argumento, ja crio objeto com os valores
    cachorro.raca=raca;
    return cachorro;
}
const bob = criarCachorro("bob","vira lata");
console.log(bob);