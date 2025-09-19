/**
 * o forEach e como uma estrutura FOR ou WHILE, porem e um metodo
 * ela percorre cada um dos elementos do array
 * para alguns sua sintaxe pode ser mas simples
 */
const num = [1,2,3,4,5,6];
num.forEach((numeros)=>{
    console.log(`O numero e: ${numeros}`);
});

const posts = [
    
    {titulo: "primeiro poster",categoria: "PHP"},
    {titulo: "segundo poster",categoria:"javascript"},
    {titulo: "terceiro poster",categoria: "java"},
];


posts.forEach((post)=>{
    console.log(`Exibindo post:${post.titulo}, da categoria: ${post.categoria}`);
}
);

// no loop precisamos acessaro indice do array
// ARRAY com o nome no PLURAL (posts) e no outro NO INDIVIDUAL (post)
