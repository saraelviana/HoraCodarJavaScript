function resolveComDelay() {
    return new Promise((resolve)=>{
        setTimeout(()=> {
            resolve("resolve a promise");
        },2000);
    });

    
}
async function chamadaAsync() {
    console.log("chamando a promisse, e esperando o resultado");
    const result = await resolveComDelay()
    console.log(`o resultado chegou ${result}`);
    
}
chamadaAsync();