
//nao consegui fazer rodar
 
//Promise.resolve(4 * "asd")
//.then(n) => {
//    if (Number.isNaN(n)){ // este - isNaN - esta veriicando se N e um numero
//        throw new Error("valores invalidos")
//    }
//})
//.catch(err) => console.log(` UM errro ocorreu ` ${}) ;

// COPILOT - ok
async function executaPromise() {
    try {
        const resultado = await falhaNaPromise();
        console.log("Sucesso", resultado);
    } catch (erro) {
        console.log("Erro capturando: ", erro.message);
        
    }
    
}
executaPromise();