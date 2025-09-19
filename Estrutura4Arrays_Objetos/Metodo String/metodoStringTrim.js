/**
 * o TRIM remove tudo que nao e TEXTO em uma STRING
 * como; carcateres especiais e espaços em branco;
 * um metodo interessante para utilizar em SANITIZAÇÃO DE DADOS
 * o metodo nao modifica o texto original
 */
// criar 1 variavel
const trimtest = "    t e s t a n d o o teste /n";
console.log(trimtest);
console.log(trimtest.trim());
console.log(trimtest.length);// 30
console.log(trimtest.trim().length);// 26

