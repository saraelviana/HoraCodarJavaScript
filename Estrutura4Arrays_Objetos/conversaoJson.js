const mjson = `{"nome":"neno":"peso":"31"}`;
console.log(mjson);
console.log(typeof mjson);
const mobjeto = JSON.parse(mjson);
console.log(mobjeto);
// agora ele e um objeto js normal
// posso atribuir valores com o destructuring pra variveis

// AGORA UM JSON INVALIDO
const badjson = `{"nome->": neno,"altura":"1.70"}`;
// quando ocorrer erro e nao consegue converter
const mbadjson = JSON.parse(badjson);// vai dar erro