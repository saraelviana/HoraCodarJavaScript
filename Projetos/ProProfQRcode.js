/*vamos ativar o conteiner */
const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("#qr-code img");



/**gerar qr code */
function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value;
    if(!qrCodeInputValue) return;
    qrCodeBtn.innerText = "Gerando Qr Code mane";/**como se fosse um load */
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`
    qrCodeImg.addEventListener("load",()=>{/** isso fara que o eveto so dispare quando a imagem carregar */
        container.classList.add("active");
        qrCodeBtn.innerText = "Aqui  mane";/**aqui depois de criar  */

    })
}
qrCodeBtn.addEventListener("click",()=>{
    generateQrCode()/**quando clicar sera invocada a função  */
})




qrCodeBtn.addEventListener("click",()=> {/** quando ele clicar vai gerar um evento */
generateQrCode()/** quando clicar,vai invocar a função */

});
/**gerar um evento a partir do enter */
qrCodeInput.addEventListener("keydown",(e)=> {/** quando ele clicar vai gerar um evento */
/**aqui eu tenho que saber se e o ENTER que vai ser pressionado */
/**o argumento que tenho e um evento keydown",(e)=> ... mais o codigo da tela */
if(e.code === "Enter")/**as outras teclas nao me intereção */{
    generateQrCode()/**agora e  tecla enter que gera o codigo */
}

});

/**limpar area do qr code */

/**pegar o input e fazer um novo evento nele */
qrCodeInput.addEventListener("keyup",()=>{/**conseguir detectar mudança naquele input,que seria limpar a area para colocar outro */
    if(!qrCodeInput.value){
        /** aqui vamos fazer quase a mesma coisa acima */

        container.classList.remove("active");/**remover o active */
        qrCodeBtn.innerText = "Gerar Qr code mane";/**aqui depois de criar  */
        };
})
