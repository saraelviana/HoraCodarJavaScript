// 1 number
console.log(2) // quando eu nao coloco entre " " estou tendo 1 dado numerico
console.log(typeof 2) // em vez do numero 2 aparece Number quando voce inspeciona a pagina
console.log(typeof 5.14) // Number
console.log(typeof -128) // Number

// em js nao importa o formao sempre vai ser interpretado como  Number
console.log(2+4) // para ´poder exibr o resultado la
console.log(5+(2*4))

// Special Numbers
//- sao dados considerados como numeros mas nao funcionam como eles em operaçoes matematicas;
// Infinity;
// -Infinity;
// NaN (Not a Number);


console.log(typeof Infinity)
console.log(typeof -Infinity)

console.log(12 * "asd");

// String
// - sao textos em js exitem 3 formas de criar dados de texto
// aspas simples ' ' , aspas duplas "" e crase ´´
// ela sempre inicia e tremina como o mesmo caractere- aspas simples ou aspas duplas
// colocar certas combinaçoes de caracteres tem um efeito interessante exemplo:
// \n  - ele pula uma linha no texto

console.log("um texto de aspas duplas")
console.log('texto de aspas simples')
console.log('13')

console.log(typeof "aspas duplas")
console.log(typeof 'aspas simples')

// simbolos String

// ela sempre inicia e tremina como o mesmo caractere- aspas simples ou aspas duplas
// colocar certas combinaçoes de caracteres tem um efeito interessante exemplo:
// \n  - ele pula uma linha no texto
// \t  - espaçamento , tipo um TAB no texto

console.log("Text em \n duas linhas")
console.log("espaçamento \t de Tab")

// concatenação

/**
 * e o recurso que une 1 ou 2 ou mai textos;
 * o operador da concatenação e o +;
 * exe: " Meu "+"texto"+"combinado";
 * pois os textos vao vim de diferentes partes
 */

console.log("oi,"+"tudo"+"bem")

// Interpolação ou Template String
/**
 * e semelhante a concatenação, mas nos possibilita a escrever tudo na mesma String;
 * esta deve ser escrita dentro da `crase`
 * podemos executar o codigo js com ${algum codigo};
 * 
 */
console.log(`A soma de 2+2 e:${2+2}`); // ele incorpora o codigo ao texto, bem pratico

console.log(`podemos colocar qualquer coisa ${console.log("texto")}`);

// booleans

/**
 * possui apenas 2 valores - true ou false
 * qualquer comparação utilizado os sinais >,<,==, resulta em um booleans
 * Mas pra que usar um booleans se do temos sempre V ou F
 * a comparação serve para depois executaro codigo 
 */

console.log(true);
console.log(5>10);
console.log(5<10);


// comparaçoes

/**
 * as comparaçoes que podemos utilizar sao
 * Maior e Menor ><;
 * maior ou igual >=
 * menor ou igual <=
 * igual ==
 * diferente !=
 * identico ===
 * 
 * 
 */

console.log(5 >= 10);
console.log(5 <= 10);
console.log(5 == 10);
console.log(10 == '10');
console.log(10 != "10"); // true (string)
console.log(10 === 10);
console.log(10 !== '10'); // verdadeiro (o valor e igual.mas o tipo e diferente, atenção)

// operadores logicos
/**
 * serve para unir 2 ou mais operações
 * o resultado final tambem e um boolean
 * && - AND - true apenas se os 2 lados forem verdadeiro
 * || - OR  - para ser true, um lado como truee suficiente
 * !  - NOT - este operador inverte a comparação
 */

// tabela verdade

/**
 * A     -    B  - A and B - A or B - Not A
 * false - false -  false  - false  - true
 * false - true  -  false  - true   - true
 * true  - false -  false  - true   - false
 * true  -  true -  true   - true   - false
 */

console.log(true && true); // basta 1 dos lados ser verdadeiro

console.log(true && false); 

console.log(5 > 2 && 2 > 10 ); // true
console.log(5 > 2 && 'mateus' > 10); // false
console.log(5 > 2 || 'mateus' > 10); // true (basa 1 lado ser verdadeiro)
console.log(!5 > 2 );// false - 1 ele havalia 1 a comparação e depois o operador logico

// Empety Values
/**
 * temos 2 palavras reservadas que pertecem a este grupo 
 * UNDEFINED e NULL;
 * undefined geralmente e visto quando utilizamos um codigo que aida nao foi definio
 * null, costuma ser imposto pelo programadores para determinar que nao ha ainda um valor
 */

console.log(typeof null, typeof undefined);

console.log(null === undefined);// false
console.log(null == undefined);// true ( os 2 nao tem valor (ausencia de valor))

// conersao de tipo automatica

/**
 *   5  * null => 0
 *  "5" - 3    => 2
 *  "5" + 1    => 51
 *  "a" * "b"  => NaN
 */

console.log(5 * null); // zero 0
console.log("teste" * "opa");// NaN
console.log("10"+1);// 101
console.log("10"-1);// 9









