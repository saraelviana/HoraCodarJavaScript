window.onload=function(){
    // 1 criar um botao
    const botao=document.createElement('button');
    botao.innerText='clique aqui pra vera cor';
    botao.setAttribute('id','botaoCor');
    botao.setAttribute('class','botao');
    botao.setAttribute('data-cor','vermelho');
    // atributo personalizado

    // 2 adicionar evento de clique
    botao.addEventListener('click', function(){
        // 3 usar getAttribute para pegar a cor do atributo "data-cor"
        const cor=botao.getAttribute('data-cor','green');
        alert(' a cor definida e : '+cor);
        // dando a cor ao botao assim
       // botao.style.backgroundColor=cor; mudou nada
    });
    //botao.classList.add('botao'); mudou nada


    // 4 adicionar o botao ao corpo da pagina
    document.body.appendChild(botao);
    // 5 criar estilo
    const estilo= document.createElement('style');
    estilo.textContent=`
    .botao{
    padding: 10px 20px;
    font-size:16px
    background-color: red;
    color: blu;
    border: none;
    border-radius:5px;
    cursor: pointer;
    }
    `;
    document.head.appendChild(estilo);
}