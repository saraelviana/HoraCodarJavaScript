// 1 vamos ter um bloco try
try {
    const soma = x+y // neste exemplo o X e o Y, nao foram estabelecido

} catch (error) {
    console.log(`Erro na digitação ${error}` )// interpolar a string e isso -> ${}
    // no programa nao aparece erro , mas no console INSPECIONAR aparece o erro
}