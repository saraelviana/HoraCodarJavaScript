const promessa = Promise.resolve(5+5)// o argumento a a soma
console.log("algun codigo");

promessa.then(value => {
    console.log(`a soma e ${value}`);
})

console.log("outro codigo");
