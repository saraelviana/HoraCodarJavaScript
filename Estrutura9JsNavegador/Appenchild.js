// criar 1 novo elemento
//const novoParagrafo =document.createElement("p");
// adicionar um texto dentro do paragrafo
//novoParagrafo.textContent="Este e um paragrado adicionado dinamicamente";
// selecione o elemento PAI  ( a div)
//const div = document.getElementById("meuDiv");
// adiciona o novo paragrao como filho da div
//div.appendChild(novoParagrafo);

window.onload=function(){
    const novoParagrafo =document.createElement("p");
    novoParagrafo.textContent="Este e um paragrado adicionado dinamicamente... teste 2 com o auxilio da window.onload=function()";
    const div = document.getElementById("meuDiv");
    div.appendChild(novoParagrafo);

}