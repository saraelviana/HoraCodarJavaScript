// 04-02
/**
 * um bloco de codigo que se repete ate uma condição ser satisfeita
 * evita repeticao desnecessaria
 * algumas das estruturas sao FOR e WHILE
 *  a suas sintaxes sao doferentes, mas as 2 chegam no mesmo resultado
 * loop infinito
 */

// WHILE
/**
 * faz uma ação ate que a condição seja atigida
 * temos tambem que definir INCREMENTADOR que faz quem a codição seja atingida
 */

let p = 0; // este vai o referencial para meu incrementador, pois ele vai parti de 0
while (p<5) {
    console.log(`repetindo ${p}`); // repetindo o valor de p
    p = p +1; // este vai ser o incremetador, pois ele vai contar ate chegar em 5
    // p = p +1 se voce nao colocar o incrmetador que seria o referencial de contagem 
    // ate que ele pare, ele vai simplemente contar INFINITAMENTE ate travar a maquina

   
}
// do while 12-02
let d = 10;
do{
    console.log(`valor de D: ${0}`);
    d--; // decrementação
}while(d > 1);

// FOR
// ela condesa toda logica em 1 linha


for (let t = 0; t<10; t++){
    // 1 variavel de inicio de referencia
            // 2 minha condicao, rodaro loop , enquanto o T ser menor que 10
                   // 3 o incremetador
    console.log("repetindo algo");
}

// o meso codigo de outra maneira
let r = 10;
for(r; r>0; r=r-1){
 console.log(` o R esta diminuindo ${r}`);
}
// outro exemplo

for(let u = 0; u<10; u++){
    if (u * 2 > 10) {
        console.log(`maior que 10 ${u}`);
        
    }else{
        if(u/2 === 0){
            console.log("deu 0")
        }
    }

}

// forcando a saida do loop usando o BREAK
for (let g=20; g>20; g--){
    console.log(`o valor de g ${g}`);// aqui ele vai ate o final, consumindo a memoria
    if (g === 12) {
        console.log("o g e 12");
        break; // desta forma quando chegarna contagem 12 ele para o loop
        
    }
}
// xercicio operador de resto
for (let s=0; s<10; s=s+1){
    if(s%2 === 0){
        console.log("numero para");
        continue; // toda vez que na contagem o numero for par a mensagem aparece (numero par) aparecendo apenas impa
    }

}

// esrutura SWITCH
/**
 * quando tivermais de 3 if e melhor usar um switch
 * cada IF seria igua a um case
 * Para cada CASE temos que adicionar um BREAK
 * temos um DEFAULT que e como um ELSE, pois se NENHUM case for executado ele mostra por padrao
 */

const job = "advogado"

switch (job) { // 
    case "programador": // verifica 
        console.log("tu es 1 programador seu mentiroso");
        break;
    case"advogado":
        console.log("tu es 1 advogado");
        break;
    case"engenheiro":
        console.log("tu es 1 engenheiro seu merda");
        break;

    default: console.log("profissao nao existe mane");
        break;
}



