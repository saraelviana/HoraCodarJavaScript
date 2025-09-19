/**
 * Os prototypes sao originados de uma CLASSE
 * que e o molde dos objetos , nela defininmos os metooos e propriedades
 * js ja possiu suas classes, porem podemos criar as nossas, isso e essencial para orientação objeto
 * e um tipo de função CONTRUTORA
 */
// 1 vamos criar 1 objeto - CACHORRO que vai ser o molde pra classe 
// 2 vamos iniciar a propriedade como nula , pois cada cachorro tem uma raça
// - agora vamos criar varios cachorros ultilizando esta base

 const cachorro = {
    raca: null,
    patas: 4,

 }
 const pastorAlemao = Object.create(cachorro);// estou criado um novo objeto a partir do cachoro que ja 
                                    // - herda as suas propriedades que e RACA (raça)
pastorAlemao.raca = "pastor alemao"; // aqui foi inserido o dado no objeto raça
console.log(pastorAlemao);

const viraLata = Object.create(cachorro);
viraLata.raca = " vira Lata";
console.log(viraLata);


