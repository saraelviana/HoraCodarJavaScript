/**
 * loop em arrays(loop em lista)
 * 
 * Algo muito comun e percorrer os arrays atraves de estruturas de repetição,como FOR e WHILE
 * Isso serve para utilizar o resultado de cada um dos elementos de forma simples,sem repetição de codigo
 */
const usuarios = ["mateus","marcos","joao","judas"];
for(let i = 0; i < usuarios.length; i++)// estou utilizando a quantidade dos meu elementos para saber quando parar
    {
    console.log(`Listando o usuario: ${usuarios[i]}`);
    // ele listou 1 por 1
    // todos pelo [i] conforme o [i] vai passando pelo icrematador ele vai mudando de usuario
    // acessar o indice pelo contador
}