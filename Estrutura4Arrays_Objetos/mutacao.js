/**
 * MUTABILITY
 * 
 * outra caracteristica interessante e a mutação, isso ocorre quando criamos um objeto a partir de outro
 * este novo objeto nao e novo e sim uma referencia do primeiro
 * as mudanças dele podem afetar a copia e vice-versa
 */
// criar 1 objeto
const nome = {
    nome :"laura do papai",
}
const sobreNome = nome;
// os 2 objetos possuem  A MESMA PROPRIEDADE e o mesmo valor
console.log(nome);
console.log(sobreNome);

// CUIDADO  tudo que voce fizer em uma vai acontecer na outra seja exclusao ou incerssao

