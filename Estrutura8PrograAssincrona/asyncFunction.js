// criar uma função
async function somarComDelay(a,b) {
    return a+b;
}
somarComDelay(2,4).then((valor)=>{
    console.log(`o valor da soma e: ${valor}`);
});
console.log("teste async");
