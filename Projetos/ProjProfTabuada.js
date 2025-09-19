// seleção de elementos
// 1 o formulario
const multiplicationForm=document.querySelector("#multiplication-form");
const numberInput=document.querySelector("#number");
const multiplicationInput=document.querySelector("#multiplicator");

// funçoes

// eventos
multiplicationForm.addEventListener("submit",(e)=>{
    e.preventDefault();// pra nao recarregar a pagina

    // transforma em variavel o multiplication number
    const multiplactionNumber=+numberInput.value;// pegar o numero e o valor dele... quando se coloca o + na frente se torna inteiro

    const multiplicatorNumber=+numberInput.value;
    console.log(multiplactionNumber,multiplicatorNumber);

})