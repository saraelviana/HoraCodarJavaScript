// o recurso fudamental do prototype que temos que entender e o FALLBACK (acessar o pai do objeto)
// quando uma propriedade nao existe em um dado/objeto, ela e procurada no seu ancestral
// - ou seja , e por isso que temos acesso a LENGTH (nos da a QTD de uma string) em strings por exemplo
// pois quando criamos um objeto a partir de outro, este outro sera o PROTOTYPE do objeto criado


const text = "asd";
console.log(Object.getPrototypeOf(text));

// outro

const bool = true;
console.log(Object.getPrototypeOf(bool)); // sempre vai mostrar o acestral

// outro

const myObject = {
    a:"b",
};
console.log(Object.getPrototypeOf(myObject));
// vamos criar um outro objeto a partir do 1 objeto para herdar o que o 1 ja tem (seja os dados)

const myObject2 = Object.create(myObject);
console.log(myObject2);// aqui esta sendo criado uma cadeia de tropotype, porque estou dizendo que
                        // o myObject vai ser tropotype do myObject2
                        // quando der este console.log - nao vai aparecer nada em myObject2 mas vai mostrar 
                        // o tropotype dele e vai estar la o conteudo que neste caso e : "b"
                        // nos acessamos o conteudo "b" do myObject sem ter criado o "b" nele, pois foi como herença
// vaos fazer assim
console.log(Object.getPrototypeOf(myObject2) === myObject); // resposta : TRUE

