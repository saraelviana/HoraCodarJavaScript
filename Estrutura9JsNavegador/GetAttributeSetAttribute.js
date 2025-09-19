// * getAttribut('atributo') 
// pega o valor de um atributo html
// * setAttribute('atributo', 'valor')
// define ou altera o valor de um atributo html
function mudarImagem(){
    // obter atributos atuais
    const srcAtual = img.getAttributes("src");
    const altAtual = img.getAttributes("alt");
    alert("SRC atual :"+srcAtual+"\nALT atual: "+altAtual);
    // alterar atributos com setAttribute
    img.setAttribute("src","https://images.app.goo.gl/6h646ci4eYrR8stdA");
    img.setAttribute("alt","imagem vermelha");
}