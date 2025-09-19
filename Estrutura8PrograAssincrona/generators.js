function* generador(){
    yield 1;
    yield 2;
    
}
// chamar em uma variavel para executar esta função
const gen = generador();

// vou pegando os valores dos generator com o metodo next
console.log(gen.next().value);// aqui tem a propriedade value que entrega valor
console.log(gen.next().value);

// 
