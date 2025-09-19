//gettere setter
class Post{
    constructor(titulo,descricao,tag){
        this.titulo=titulo;
        this.descricao=descricao;
        this.tag=tag;
    }

// agora vou criar um get para exibir o titulo

get exibirTitulo(){ // os () e porque tem argumento
    return `voce esta lendo: ${this.titulo}` ;// e CRASE-- e como se o usuario entrase no post ele recebe
    // esta mensagem instantaneamente

}
// vamos de SET agora
set adicionarTags(tag){
    // agora porque isso ? eu quero que as TAG fiquem salvas como ARREY no constructor
    // mas no meu projeto estou recebendo como STRING, pois estou pedido para o usuario digitar 
    // elas separadas por virgulas 
    const tagArrays= tag.split(", ");// 
    // nao retunr nada
    this.tag=tagArrays
}
}

// agora vamos instanciar o post
const myPost = new Post("algum post"," e um post sobre programação");
console.log(myPost);
/**
 * Post
descricao:" e um post sobre programação" -> esta definido
tag:undefined
titulo:"algum post" -> esta definido
exibirTitulo(...) exibirTitulo:"voce esta lendo: algum post"

 * 
 * 
 */
// como vou utilizar o GET ? utilizo como uma propriedade
console.log(myPost.exibirTitulo)// -> voce esta lendo: algum post--- usado como proriedade e definido
                                // como metodo
myPost.adicionarTags="programação, js, java";
console.log(myPost);
/**
 * 
Post
descricao:" e um post sobre programação"
tag: Array(3)
0:"programação"
1:"js"
2:"java"

length:3

[[Prototype]]: Array(0)

titulo:"algum post"
exibirTitulo:"voce esta lendo: algum post

as tag ficaram todas em formato de lista (array)
 * 
 */
