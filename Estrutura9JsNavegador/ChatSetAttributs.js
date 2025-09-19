window.onload=function(){
    // 1 criar um botao
    const botao = document.createElement('button');
    // 2 inserir texto no botao
    botao.innerText='Clique aqui';
    // 3 adicionar ID no botao
    botao.setAttribute('id','meuBotao');
    // 4 adicionar uma classe para estilo
    botao.setAttribute('class','estilo-botao');
    // 5 um evento ao clicar
    botao.addEventListener('click',function(){
        alert('voce clicou no botao');
        // tentei substituir por 1 imagem mas nao deu boa
    })
    // 5 Desativar o botao (atributo "disable")
    // botao.setAttribute('disabled','');
    // se deixar ativo o botao nao funciona

    // 6 inserir o botao no corpo da pagina
    document.body.appendChild(botao);
    // 7 criar um tag <style> com css (opcional ,tambem em js)
    const estilo=document.createElement('style');
    estilo.textContent=`
    .estilo-botao {
    background-color: gray;
    color:white;
    padding: 10px 20px;
    border:nome;
    border-radius: 5px;
    curso: not-allowed:
}
`;
    // estava dando erro , pois o certo e shift+`
    // e eu estava fazendo ' 
    document.head.appendChild(estilo);
    


}