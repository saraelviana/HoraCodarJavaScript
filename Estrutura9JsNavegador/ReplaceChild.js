window.onload = function(){
    // criar o novo paragrafo
    const novoParagrafo=document.createElement("p");
    // selecionar o conteiner ( pai)
    const conteiner=document.getElementById("container");
    // selecionar o paragrafo antigo
    const paragrafoAntigo=document.getElementById("paragrafoAntigo");
    // substituir o antigo pelo novo
    conteiner.replaceChild(novoParagrafo.paragrafoAntigo);
};